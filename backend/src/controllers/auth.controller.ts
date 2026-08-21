import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { catchAsync } from '../utils/catchAsync';
import { AuthRequest } from '../middleware/auth.middleware';
import { env } from '../config/env';
import { getRouteParam } from '../utils/routeParams';
import User from '../models/User';

export const register = catchAsync(async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body;

  const userExists = await User.findOne({
    $or: [{ email }, { username }]
  });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists with that email or username' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id.toString()),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id.toString()),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

export const getMe = catchAsync(async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.user.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

type OAuthProvider = 'google' | 'facebook';

const providerConfig = (provider: OAuthProvider) => provider === 'google'
  ? {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenUrl: 'https://oauth2.googleapis.com/token',
      userUrl: 'https://www.googleapis.com/oauth2/v2/userinfo',
      scope: 'openid email profile',
    }
  : {
      clientId: env.FACEBOOK_CLIENT_ID,
      clientSecret: env.FACEBOOK_CLIENT_SECRET,
      authorizationUrl: 'https://www.facebook.com/v23.0/dialog/oauth',
      tokenUrl: 'https://graph.facebook.com/v23.0/oauth/access_token',
      userUrl: 'https://graph.facebook.com/me?fields=id,name,email,picture',
      scope: 'email,public_profile',
    };

const isProvider = (value: string): value is OAuthProvider => value === 'google' || value === 'facebook';

export const startOAuth = (req: Request, res: Response) => {
  const provider = getRouteParam(req, 'provider');
  if (!isProvider(provider)) return res.status(404).json({ message: 'Unsupported OAuth provider' });

  const config = providerConfig(provider);
  if (!config.clientId || !config.clientSecret) {
    return res.status(503).json({ message: `${provider} OAuth is not configured. Add provider credentials to backend/.env` });
  }

  const callbackUrl = `${env.API_URL}/auth/${provider}/callback`;
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: callbackUrl,
    response_type: 'code',
    scope: config.scope,
  });
  if (provider === 'google') {
    params.set('access_type', 'offline');
    params.set('prompt', 'select_account');
  } else {
    params.set('auth_type', 'reauthorize');
  }
  res.redirect(`${config.authorizationUrl}?${params.toString()}`);
};

export const oauthCallback = catchAsync(async (req: Request, res: Response) => {
  const provider = getRouteParam(req, 'provider');
  if (!isProvider(provider)) return res.status(404).send('Unsupported OAuth provider');
  const code = typeof req.query.code === 'string' ? req.query.code : undefined;
  if (!code) return res.status(400).send('OAuth authorization code is missing');

  const config = providerConfig(provider);
  if (!config.clientId || !config.clientSecret) return res.status(503).send('OAuth provider is not configured');

  const callbackUrl = `${env.API_URL}/auth/${provider}/callback`;
  const tokenParams = new URLSearchParams({
      code,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: callbackUrl,
      grant_type: 'authorization_code',
  });
  const tokenResponse = provider === 'facebook'
    ? await fetch(`${config.tokenUrl}?${tokenParams.toString()}`)
    : await fetch(config.tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: tokenParams,
      });
  if (!tokenResponse.ok) throw new Error('OAuth token exchange failed');
  const tokenData = await tokenResponse.json() as { access_token?: string };
  if (!tokenData.access_token) throw new Error('OAuth access token missing');

  const profileResponse = await fetch(config.userUrl, {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });
  if (!profileResponse.ok) throw new Error('OAuth profile request failed');
  const profile = await profileResponse.json() as { id?: string; email?: string; name?: string; picture?: string | { data?: { url?: string } } };
  if (!profile.id || !profile.email) throw new Error('OAuth provider did not return an email address');
  const avatar = typeof profile.picture === 'string' ? profile.picture : profile.picture?.data?.url;

  let user = await User.findOne({ email: profile.email });

  if (user) {
    // Update existing user with provider info if missing
    user.provider = provider;
    user.providerId = profile.id;
    if (!user.avatar && avatar) {
      user.avatar = avatar;
    }
    await user.save();
  } else {
    // Create new user
    const usernameBase = (profile.email.split('@')[0] || 'reader').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 24) || 'reader';
    let username = usernameBase;
    let suffix = 1;
    while (await User.findOne({ username })) username = `${usernameBase}${suffix++}`;
    
    user = await User.create({
      name: profile.name || usernameBase,
      username,
      email: profile.email,
      password: await bcrypt.hash(`${provider}:${profile.id}:${Date.now()}`, 10), // Dummy password
      provider,
      providerId: profile.id,
      avatar,
      isVerified: true,
    });
  }

  res.redirect(`${env.FRONTEND_URL}/oauth/callback?token=${encodeURIComponent(generateToken(user._id.toString()))}`);
});


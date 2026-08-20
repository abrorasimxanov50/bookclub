import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  });
};


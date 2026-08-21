import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';

export default function OAuthCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const token = params.get('token');
    if (!token) {
      navigate('/login?error=oauth', { replace: true });
      return;
    }
    localStorage.setItem('token', token);
    authService.getMe()
      .then((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        login(user, token);
        navigate('/', { replace: true });
      })
      .catch(() => navigate('/login?error=oauth', { replace: true }));
  }, [login, navigate, params]);

  return <div className="min-h-screen grid place-items-center text-stone-600">Signing you in...</div>;
}
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Mail, Lock, ArrowRight, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';

export const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !username || !email || !password) return setError('Please enter all fields');
    setLoading(true);
    setError('');
    try {
      const data = await authService.register(name, username, email, password);
      login(data, data.token);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-stone-50 dark:bg-stone-950 font-sans">
      
      {/* Right Image Section (Flipped for Register to look different than Login) */}
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-stone-900/40 to-transparent z-10" />
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop"
          alt="Library Bookshelf"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-16 text-white text-right">
          <blockquote className="space-y-4 max-w-lg ml-auto">
            <p className="text-2xl font-serif leading-snug font-medium drop-shadow-md">
              "A book is a dream that you hold in your hand."
            </p>
            <footer className="text-amber-300 font-semibold tracking-wider text-sm uppercase flex items-center justify-end gap-4">
              Neil Gaiman
              <div className="w-8 h-[1px] bg-amber-300"></div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          
          <div className="mb-10 text-center sm:text-left">
            <Link to="/" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-500 mb-8 hover:opacity-80 transition-opacity">
              <BookOpen size={28} strokeWidth={2.5} />
              <span className="font-serif font-bold text-2xl tracking-tight text-stone-900 dark:text-white">
                BookClub
              </span>
            </Link>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 dark:text-white tracking-tight">
              Create an account
            </h2>
            <p className="mt-3 text-stone-500 dark:text-stone-400">
              Join thousands of readers worldwide.
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-5" method="POST" onSubmit={handleRegister}>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setUsername(e.target.value.toLowerCase().replace(/\s+/g, ''));
                    }}
                    className="block w-full pl-10 pr-3 py-3 border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-stone-700 dark:text-stone-300">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-stone-200 dark:border-stone-800 rounded-xl bg-white dark:bg-stone-900 text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm shadow-sm"
                    placeholder="Create a strong password"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all disabled:opacity-50"
                >
                  {loading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} />
                </button>
              </div>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200 dark:border-stone-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-stone-50 dark:bg-stone-950 text-stone-500">Or register with Google</span>
              </div>
            </div>

            {/* Social Login - Google only */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => { window.location.href = `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/google`; }}
                className="flex justify-center items-center gap-3 w-full py-3 px-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors shadow-sm font-semibold text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-stone-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-amber-600 hover:text-amber-500 transition-colors">
                Sign in instead
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;

import React from 'react';
import { KeyRound } from 'lucide-react';

export const ForgotPassword = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-800">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-xl flex items-center justify-center mb-4">
            <KeyRound className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-lora">Reset Password</h2>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300">Email address</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-lg bg-transparent text-stone-900 dark:text-stone-100 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors">
              Send reset link
            </button>
          </div>
          <div className="text-center">
            <a href="/login" className="text-sm font-medium text-amber-600 hover:text-amber-500">Back to login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

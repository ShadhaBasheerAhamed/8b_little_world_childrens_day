import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { loginAdmin, isAdminLoggedIn } from '../services/authService';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  // If already logged in, redirect straight to dashboard
  if (isAdminLoggedIn()) {
    navigate('/admin/dashboard', { replace: true });
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginAdmin(pin)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid teacher passcode. Default PIN is 8888 or teacher8b.');
    }
  };

  return (
    <div className="min-h-screen bg-parchment flex flex-col justify-between p-4 sm:p-8">
      
      {/* Top Bar */}
      <div className="max-w-md mx-auto w-full flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-amber-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Students Hall</span>
        </Link>
      </div>

      {/* Login Box */}
      <div className="max-w-md mx-auto w-full bg-white/95 backdrop-blur-md border-2 border-[#E8DFC8] rounded-3xl p-6 sm:p-8 shadow-paper-lg my-auto">
        
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shadow-inner">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h1 className="font-serif text-2xl font-bold text-slate-800">
            Teacher's Desk · Admin
          </h1>
          <p className="text-xs text-slate-500 font-sans">
            Enter the teacher passcode to manage Class 8B profiles and generate QR cards.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
              Teacher PIN or Passcode
            </label>
            <div className="relative">
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setError('');
                  setPin(e.target.value);
                }}
                placeholder="Enter 8888 or teacher8b"
                className="w-full py-3 px-4 pl-11 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50 bg-[#FAF8F5] text-slate-800 outline-none text-sm font-mono shadow-inner"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Default passcode: <span className="font-mono font-bold text-slate-600">8888</span></p>
          </div>

          {error && (
            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 text-center font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-amber-800 hover:bg-amber-900 text-white font-serif font-bold text-sm rounded-xl shadow-md transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
          >
            <span>Enter Teacher Dashboard</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </form>

      </div>

      {/* Footer */}
      <div className="text-center text-xs text-slate-400">
        Class 8B Management Portal · Private Teacher Access
      </div>

    </div>
  );
}


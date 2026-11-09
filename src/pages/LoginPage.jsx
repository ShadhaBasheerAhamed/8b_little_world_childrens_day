import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Star, Sparkles, KeyRound, ArrowRight, ShieldCheck, HelpCircle, Delete, CheckCircle } from 'lucide-react';
import { loginStudent, getCurrentStudentSession } from '../services/authService';
import { getStudents } from '../services/storageService';
import { triggerConfetti, playSparkleSound } from '../utils/effects';

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [showRoster, setShowRoster] = useState(false);
  const students = getStudents();

  // If URL has ?pin=823 (e.g., from QR code scan), pre-fill it!
  useEffect(() => {
    const pinParam = searchParams.get('pin');
    if (pinParam) {
      setPin(pinParam.trim());
    }
  }, [searchParams]);

  const handleKeypadPress = (val) => {
    setError('');
    if (val === 'clear') {
      setPin('');
      return;
    }
    if (val === 'backspace') {
      setPin((prev) => prev.slice(0, -1));
      return;
    }
    if (pin.length < 3) {
      const newPin = pin + val;
      setPin(newPin);
      if (newPin.length === 3) {
        attemptLogin(newPin);
      }
    }
  };

  const attemptLogin = (pinToTest) => {
    const student = loginStudent(pinToTest);
    if (student) {
      triggerConfetti();
      playSparkleSound();
      navigate(`/star/${student.pin}`);
    } else {
      setError('We could not find a star with that PIN. Please check your roll number (823–851).');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pin) {
      setError('Please enter your 3-digit PIN.');
      return;
    }
    attemptLogin(pin);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-parchment relative overflow-hidden px-4 py-8">
      
      {/* Decorative ambient aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-amber-200/50 via-sky-200/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Header */}
      <div className="text-center space-y-2 max-w-md mx-auto pt-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-200 shadow-sm text-xs font-semibold text-amber-900">
          <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse-slow" />
          <span>Class 8B · The Little Hall of Stars</span>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-md mx-auto my-auto bg-white/95 backdrop-blur-md border-2 border-[#E8DFC8] rounded-3xl p-6 sm:p-8 shadow-paper-lg relative">
        
        {/* Card Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center text-amber-700 shadow-inner">
            <Sparkles className="w-7 h-7 text-amber-600 animate-pulse-slow" />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
            The world has 29 little stars.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-sky-700">
              Find yours.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 font-sans">
            Enter your special PIN to unlock your little world.
          </p>
        </div>

        {/* PIN Display Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="relative">
            <input
              type="password"
              inputMode="numeric"
              maxLength={3}
              value={pin}
              onChange={(e) => {
                setError('');
                const val = e.target.value.replace(/\D/g, '').slice(0, 3);
                setPin(val);
                if (val.length === 3) attemptLogin(val);
              }}
              placeholder="•••"
              className="w-full text-center tracking-[0.5em] font-mono text-3xl sm:text-4xl py-3 px-4 rounded-2xl border-2 border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-200/50 bg-[#FAF8F5] text-slate-800 outline-none transition-all shadow-inner placeholder:text-slate-300"
            />
            {pin.length === 3 && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-600">
                <CheckCircle className="w-6 h-6 animate-fadeIn" />
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 text-center font-medium animate-fadeIn">
              {error}
            </div>
          )}

          {/* Interactive Touch Keypad (Ideal for mobile phone users) */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleKeypadPress(String(num))}
                className="py-3 bg-[#FAF6EE] hover:bg-amber-100/70 border border-[#E8DFC8] rounded-xl text-lg font-serif font-bold text-slate-800 transition-all active:scale-95 shadow-xs"
              >
                {num}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleKeypadPress('clear')}
              className="py-3 bg-[#FAF6EE] hover:bg-red-50 border border-[#E8DFC8] rounded-xl text-xs font-mono font-bold text-slate-500 hover:text-red-600 transition-all active:scale-95"
            >
              C
            </button>
            <button
              type="button"
              onClick={() => handleKeypadPress('0')}
              className="py-3 bg-[#FAF6EE] hover:bg-amber-100/70 border border-[#E8DFC8] rounded-xl text-lg font-serif font-bold text-slate-800 transition-all active:scale-95 shadow-xs"
            >
              0
            </button>
            <button
              type="button"
              onClick={() => handleKeypadPress('backspace')}
              className="py-3 bg-[#FAF6EE] hover:bg-amber-100/70 border border-[#E8DFC8] rounded-xl text-xs font-mono font-bold text-slate-600 flex items-center justify-center transition-all active:scale-95"
            >
              <Delete className="w-5 h-5" />
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 mt-2 bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
          >
            <span>Unlock My World</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

        </form>

        {/* Forgot PIN / Roster Helper */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setShowRoster(!showRoster)}
            className="text-xs font-medium text-amber-800 hover:text-amber-900 underline decoration-amber-300 underline-offset-4 flex items-center justify-center space-x-1 mx-auto"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Need help finding your PIN?</span>
          </button>
        </div>

      </div>

      {/* Class 8B Student Directory Drawer Modal */}
      {showRoster && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 shadow-2xl border border-amber-200 max-h-[80vh] flex flex-col">
            
            <div className="flex items-center justify-between border-b pb-3 mb-3">
              <div>
                <h3 className="font-serif font-bold text-slate-800 text-lg">
                  Class 8B Student PIN Directory
                </h3>
                <p className="text-xs text-slate-500">
                  Tap your name to pre-fill your PIN (Roll numbers 823–851)
                </p>
              </div>
              <button
                onClick={() => setShowRoster(false)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto space-y-1.5 flex-1 pr-1">
              {students.map((s) => (
                <button
                  key={s.pin}
                  onClick={() => {
                    setPin(s.pin);
                    setShowRoster(false);
                    attemptLogin(s.pin);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50 text-left border border-slate-100 hover:border-amber-200 transition-colors"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                      {s.rollNumber}
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {s.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-md">
                    PIN: {s.pin}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t mt-3 text-center">
              <button
                onClick={() => setShowRoster(false)}
                className="text-xs font-semibold text-slate-600 px-4 py-1.5 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                Close Directory
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Discreet Footer with Teacher Desk */}
      <div className="text-center pt-6 space-y-1">
        <p className="text-[11px] text-slate-400">
          Created with love for the 29 stars of Grade 8B
        </p>
        <Link
          to="/admin"
          className="inline-flex items-center space-x-1 text-[11px] text-amber-800/70 hover:text-amber-900 font-medium"
        >
          <ShieldCheck className="w-3 h-3 text-amber-600" />
          <span>Teacher's Desk (Admin)</span>
        </Link>
      </div>

    </div>
  );
}


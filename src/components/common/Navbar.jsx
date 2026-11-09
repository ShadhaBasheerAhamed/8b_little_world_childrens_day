import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Star, Sparkles, LogOut, Menu, X, BookOpen, User, Shield, ChevronDown } from 'lucide-react';
import { logoutStudent, getCurrentStudentSession } from '../../services/authService';
import { triggerConfetti, playSparkleSound } from '../../utils/effects';

export default function Navbar({ student, onJumpToSection }) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const session = getCurrentStudentSession();

  const handleLogout = () => {
    logoutStudent();
    navigate('/login');
  };

  const handleCelebration = () => {
    triggerConfetti();
    playSparkleSound();
  };

  const sections = [
    { id: 'section-1', name: '01. About You' },
    { id: 'section-2', name: '02. What Makes You Special' },
    { id: 'section-3', name: '03. Superpowers' },
    { id: 'section-4', name: '04. Letter to Future Self' },
    { id: 'section-5', name: '05. Cover Star' },
    { id: 'section-6', name: '06. Character Card' },
    { id: 'section-7', name: '07. Open When In Doubt' },
    { id: 'section-8', name: '08. One Last Thing' },
  ];

  const handleSectionClick = (id) => {
    setMobileMenuOpen(false);
    if (onJumpToSection) {
      onJumpToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FDFBF7]/90 border-b border-[#EAE3D6] shadow-sm transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform shadow-inner">
            <Star className="w-5 h-5 fill-amber-400 stroke-amber-600 animate-pulse-slow" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-slate-800 text-base sm:text-lg leading-tight tracking-tight">
              The Little Hall of Stars
            </span>
            <span className="text-[11px] font-sans text-amber-700/80 font-medium tracking-wider uppercase">
              Class 8B · Special Edition
            </span>
          </div>
        </Link>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-3">
          {student && (
            <>
              {/* Quick Jump Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-amber-800 bg-[#FAF6EE] hover:bg-[#F2ECE0] border border-[#E4DACB] rounded-full transition-colors">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Explore Sections</span>
                  <ChevronDown className="w-3 h-3 text-slate-400 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute right-0 mt-2 w-56 py-2 bg-white rounded-xl shadow-xl border border-amber-100 hidden group-hover:block transition-all animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    8 Chapters of You
                  </div>
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => handleSectionClick(sec.id)}
                      className="w-full text-left px-3.5 py-1.5 text-xs text-slate-700 hover:bg-amber-50 hover:text-amber-900 transition-colors flex items-center justify-between"
                    >
                      <span>{sec.name}</span>
                      <Star className="w-2.5 h-2.5 text-amber-400 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Celebration Sparkles */}
              <button
                onClick={handleCelebration}
                title="Celebrate with Stars!"
                className="flex items-center space-x-1 px-3 py-1.5 text-xs font-medium text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-full transition-transform active:scale-95 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden lg:inline">Celebrate</span>
              </button>

              {/* Student Pill */}
              <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
                <div className="w-7 h-7 rounded-full bg-sky-100 border border-sky-300 text-sky-700 flex items-center justify-center font-bold text-xs">
                  {student.rollNumber}
                </div>
                <div className="text-left text-xs">
                  <span className="font-semibold text-slate-800 block truncate max-w-[120px]">
                    {student.name}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    PIN: {student.pin}
                  </span>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                title="Exit Profile"
                className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </>
          )}

          {!student && (
            <Link
              to="/login"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-sm transition-transform active:scale-95"
            >
              Student Unlock
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          {student && (
            <button
              onClick={handleCelebration}
              className="p-1.5 text-amber-600 bg-amber-100 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#E4DACB] px-5 py-4 space-y-3 shadow-lg">
          {student ? (
            <>
              <div className="flex items-center justify-between pb-3 border-b border-amber-200/60">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center font-bold text-xs">
                    #{student.rollNumber}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{student.name}</h4>
                    <p className="text-[11px] text-amber-800 font-medium">Class 8B Star Profile</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-xs text-red-600 font-medium bg-red-50 px-2.5 py-1.5 rounded-lg"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Exit</span>
                </button>
              </div>

              <div className="space-y-1 pt-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Jump to Chapter:
                </p>
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => handleSectionClick(sec.id)}
                    className="w-full text-left py-2 px-3 text-xs font-medium text-slate-700 hover:bg-white rounded-lg flex items-center justify-between"
                  >
                    <span>{sec.name}</span>
                    <Star className="w-3 h-3 text-amber-400" />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="py-2 text-center">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block w-full py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl"
              >
                Enter Your PIN to Unlock
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}


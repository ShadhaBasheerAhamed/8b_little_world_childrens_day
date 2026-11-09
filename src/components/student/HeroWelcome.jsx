import React from 'react';
import { Star, Sparkles, Heart, Compass, BookOpen, User, Shield, Terminal, ArrowDown } from 'lucide-react';
import { triggerConfetti, playSparkleSound } from '../../utils/effects';

export default function HeroWelcome({ student, onJumpToSection }) {
  const handlePillClick = (id) => {
    if (onJumpToSection) {
      onJumpToSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navPills = [
    { id: 'section-1', label: '1. Identity' },
    { id: 'section-2', label: '2. Appreciation' },
    { id: 'section-3', label: '3. Superpowers' },
    { id: 'section-4', label: '4. Future Letter' },
    { id: 'section-5', label: '5. Magazine' },
    { id: 'section-6', label: '6. Character' },
    { id: 'section-7', label: '7. Open in Doubt' },
    { id: 'section-8', label: '8. Teacher Note' },
  ];

  return (
    <section className="relative pt-8 pb-14 px-4 sm:px-6 overflow-hidden text-center">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-amber-100/60 via-sky-100/50 to-amber-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto space-y-6">

        {/* Top Floating Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-amber-300/80 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin-slow" />
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
            Class 8B · Star #{student.rollNumber}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-xs font-mono text-amber-700">PIN: {student.pin}</span>
        </div>

        {/* Primary Welcoming Title */}
        <div className="space-y-3">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Hey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-sky-700">{student.name}</span>!
          </h1>
          <p className="font-serif italic text-lg sm:text-2xl text-slate-700 font-medium">
            This little corner of the internet is all yours.
          </p>
        </div>

        {/* Emotional Sub-message */}
        <div className="bg-[#FFFDF9]/90 backdrop-blur-sm border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-paper max-w-xl mx-auto">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            "Someone wanted to remind you how special you are. Take your time, explore each chapter, and revisit this whenever you need a reminder of your brilliance."
          </p>
          <div className="mt-3 flex items-center justify-center space-x-2 text-xs font-medium text-amber-800">
            <span>From your Teacher with love</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>

        {/* Quick Chapter Navigation Pills */}
        <div className="pt-2">
          <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
            Quick Navigation — 8 Chapters
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {navPills.map((pill) => (
              <button
                key={pill.id}
                onClick={() => handlePillClick(pill.id)}
                className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white/80 hover:bg-amber-100 hover:text-amber-900 border border-[#E4DACB] hover:border-amber-300 rounded-full transition-all duration-150 shadow-xs active:scale-95"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gentle Scroll Indicator */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => handlePillClick('section-1')}
            className="flex flex-col items-center text-xs text-slate-400 hover:text-amber-700 transition-colors group"
          >
            <span className="mb-1 text-[11px] font-medium tracking-wide">Begin Your Journey</span>
            <ArrowDown className="w-4 h-4 text-amber-500 animate-bounce group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { Mail, Heart, Sparkles, Lock, Unlock, RotateCcw } from 'lucide-react';
import { triggerConfetti, playSparkleSound } from '../../utils/effects';

export default function Section07Envelope({ student }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      triggerConfetti();
      playSparkleSound();
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <section id="section-7" className="py-14 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>Chapter 07</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            Open When You Doubt Yourself
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto">
            An interactive envelope holding words of quiet reassurance for cloudy days.
          </p>
        </div>

        {/* Envelope Interaction Container */}
        <div className="flex flex-col items-center">
          
          <div className="w-full max-w-lg">
            
            {/* The Envelope Box */}
            <div
              onClick={handleToggle}
              className={`relative cursor-pointer select-none transition-all duration-500 rounded-3xl p-6 sm:p-8 border-2 ${
                isOpen
                  ? 'bg-[#FFFDF9] border-amber-300 shadow-2xl'
                  : 'bg-[#FAF4E8] hover:bg-[#F5ECDA] border-amber-200/90 shadow-paper hover:shadow-paper-lg hover:-translate-y-1'
              }`}
            >
              
              {/* Wax Seal Button (Top Center) */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <button
                  type="button"
                  className={`w-12 h-12 rounded-full border-2 border-red-800 flex items-center justify-center shadow-lg transition-transform duration-300 active:scale-95 ${
                    isOpen
                      ? 'bg-amber-600 text-white rotate-180'
                      : 'bg-red-700 text-amber-200 hover:scale-110'
                  }`}
                >
                  {isOpen ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </button>
              </div>

              {/* Closed Envelope Teaser */}
              {!isOpen ? (
                <div className="py-8 text-center space-y-4">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                      A Private Letter for {student.name}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">
                      "Open this when you feel you're not good enough."
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-sm mx-auto leading-relaxed">
                    Tap the red seal above or click anywhere on this envelope to reveal what your teacher wrote for you.
                  </p>

                  <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-900 bg-amber-100/80 px-4 py-2 rounded-full border border-amber-300 shadow-xs animate-bounce">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Tap to Open Letter</span>
                  </div>
                </div>
              ) : (
                /* Opened Letter View */
                <div className="pt-6 pb-2 space-y-6 animate-fadeIn">
                  
                  <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold">
                        Unsealed Letter · Class 8B
                      </span>
                      <h4 className="font-serif font-bold text-slate-900 text-lg">
                        Dearest {student.name},
                      </h4>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-1 text-xs text-slate-500 hover:text-amber-800 bg-slate-100 hover:bg-amber-50 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Fold Back</span>
                    </button>
                  </div>

                  {/* Letter Body */}
                  <div className="bg-stationery p-4 sm:p-6 rounded-2xl border border-amber-100 shadow-inner">
                    <p className="font-serif text-sm sm:text-base text-slate-800 leading-relaxed sm:leading-loose whitespace-pre-line">
                      {student.encouragementLetter}
                    </p>
                  </div>

                  {/* Heartfelt Teacher Stamp */}
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-900 font-medium leading-relaxed">
                      "Someone believed in you enough to create this little world just for you. Never forget that."
                    </p>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { Shield, Sparkles, Zap, Award, Star, Flame, Compass } from 'lucide-react';

export default function Section06Character({ student }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="section-6" className="py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Zap className="w-3.5 h-3.5" />
            <span>Chapter 06</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            If You Were a Character...
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto">
            A collectible fantasy trading card inspired by {student.name}'s imagination, curiosity, and spirit.
          </p>
        </div>

        {/* Card Showcase */}
        <div className="flex flex-col items-center">
          
          {/* Trading Card Container */}
          <div className="w-full max-w-[340px] sm:max-w-[360px] relative group perspective-1000">
            
            <div className="holo-card bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 border-4 border-amber-400/80 rounded-3xl p-5 shadow-2xl text-white relative transition-transform duration-300 hover:scale-[1.02]">
              
              {/* Card Gold Trim Header */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-400/40">
                <div className="flex items-center space-x-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-amber-300">
                    LEGENDARY CARD
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-full border border-amber-400/30">
                  STAR-8B-0{student.rollNumber}
                </span>
              </div>

              {/* Character Illustration / Avatar Box */}
              <div className="my-4 relative rounded-2xl bg-gradient-to-tr from-amber-600/30 via-sky-600/20 to-purple-600/30 border border-amber-300/40 p-5 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                
                <div className="w-20 h-20 mx-auto rounded-full bg-slate-900/90 border-2 border-amber-300 flex items-center justify-center text-amber-300 shadow-gold-glow mb-2">
                  <Sparkles className="w-10 h-10 animate-pulse-slow" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-black text-amber-200 tracking-tight">
                  {student.characterName}
                </h3>
                <span className="inline-block mt-1 text-[11px] font-mono tracking-wider uppercase text-sky-300 bg-sky-950/70 px-2.5 py-0.5 rounded-full border border-sky-400/40">
                  {student.characterType}
                </span>
              </div>

              {/* Character Attributes (5 Power Bars) */}
              <div className="space-y-2 py-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80 font-bold block">
                  Core Character Attributes:
                </span>
                
                {student.characterAttributes.map((attr, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-200">{attr.name}</span>
                      <span className="font-mono text-amber-400 font-bold">{attr.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-sky-400 rounded-full transition-all duration-1000"
                        style={{ width: `${attr.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Ability Box */}
              <div className="mt-4 bg-slate-900/80 border border-amber-400/40 rounded-xl p-3 space-y-1">
                <div className="flex items-center space-x-1.5 text-amber-400 text-xs font-bold font-mono">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>SPECIAL ABILITY</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {student.characterSpecialPower}
                </p>
              </div>

              {/* Motto Banner */}
              <div className="mt-3 pt-3 border-t border-amber-400/30 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-serif italic text-amber-200 text-xs">
                  "{student.characterMotto}"
                </span>
                <span className="font-mono text-[9px] uppercase tracking-tighter text-slate-500">
                  CLASS 8B UNIVERSE
                </span>
              </div>

            </div>

          </div>

          <p className="text-[11px] text-slate-400 font-sans mt-4 text-center">
            ✦ Hover over the card on desktop or tilt on mobile to see the holographic starlight shine.
          </p>

        </div>

      </div>
    </section>
  );
}


import React from 'react';
import { Star, Sparkles, Quote, Bookmark, Award } from 'lucide-react';

export default function Section01Identity({ student }) {
  // Generate student initials
  const initials = student.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section id="section-1" className="py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Chapter 01</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            A Little World of You
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans">
            Every star shines differently. Your way of learning and growing makes you special.
          </p>
        </div>

        {/* Identity Showcase Card (Scrapbook / Polaroid & Profile Style) */}
        <div className="bg-[#FAF6EE] border border-[#E8DFC8] rounded-3xl p-6 sm:p-10 shadow-paper relative overflow-hidden">
          
          {/* Subtle Decorative Star Stamp */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-30 pointer-events-none">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-800 flex items-center justify-center rotate-12">
              <span className="text-[10px] font-mono font-bold text-amber-900 tracking-tighter uppercase text-center">
                Class 8B<br />Verified Star
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Collectible Identity Badge / Polaroid Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white p-4 pb-6 rounded-2xl shadow-md border border-amber-100 max-w-[260px] w-full text-center transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                
                {/* Avatar / Monogram with Celestial Ring */}
                <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-amber-100 via-sky-100 to-amber-200 border-2 border-amber-300/80 flex items-center justify-center shadow-inner overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-900 relative z-10">
                    {initials}
                  </span>
                  <div className="absolute bottom-2 right-2 bg-amber-500 text-white rounded-full p-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-white" />
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-800 leading-tight">
                  {student.name}
                </h3>
                <p className="text-xs text-amber-700 font-medium mt-0.5">
                  {student.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-around text-[11px] text-slate-500 font-mono">
                  <div>
                    <span className="block text-slate-400 text-[9px] uppercase">Roll No</span>
                    <span className="font-bold text-slate-700">{student.rollNumber}</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div>
                    <span className="block text-slate-400 text-[9px] uppercase">Grade</span>
                    <span className="font-bold text-slate-700">8-B</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div>
                    <span className="block text-slate-400 text-[9px] uppercase">PIN</span>
                    <span className="font-bold text-amber-700">{student.pin}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Personal Introduction & Quote */}
            <div className="md:col-span-7 space-y-5">
              
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
                  Welcome to Your Constellation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-800">
                  {student.name}
                </h3>
              </div>

              {/* Personal Introduction Narrative */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans bg-white/70 p-4 rounded-xl border border-amber-200/50">
                {student.introduction}
              </p>

              {/* Introductory Quote Card */}
              <div className="relative pl-6 pr-4 py-3 border-l-4 border-amber-500 bg-amber-50/70 rounded-r-xl">
                <Quote className="w-5 h-5 text-amber-400 absolute top-2 left-1 -translate-y-1 opacity-50" />
                <p className="font-serif italic text-sm sm:text-base text-slate-800 font-medium">
                  "{student.quote}"
                </p>
                <span className="text-[11px] font-sans text-amber-800 font-semibold block mt-1">
                  — A motto for {student.name}'s journey
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


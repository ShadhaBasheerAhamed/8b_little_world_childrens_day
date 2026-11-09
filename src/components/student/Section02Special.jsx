import React from 'react';
import { Heart, Sparkles, Feather, Bookmark, CheckCircle2 } from 'lucide-react';

export default function Section02Special({ student, teacherName = "Shadha Mam" }) {
  return (
    <section id="section-2" className="py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Feather className="w-3.5 h-3.5" />
            <span>Chapter 02</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            What Makes You Special
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans">
            A heartfelt appreciation of your character, curiosity, and classroom presence.
          </p>
        </div>

        {/* Appreciation Card */}
        <div className="relative bg-[#FFFDF9] border-2 border-[#E8DFC8] rounded-3xl p-6 sm:p-12 shadow-paper overflow-hidden">
          
          {/* Elegant Top Decorative Border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-300 via-amber-500 to-sky-400" />

          {/* Background Watermark Leaf */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
            <Sparkles className="w-64 h-64 text-amber-600" />
          </div>

          <div className="space-y-6 relative z-10">
            
            {/* Header / Sub-badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-100 pb-4 gap-2">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                  A Teacher's Sincere Reflection
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">
                  To Dear {student.name},
                </h3>
              </div>
              <div className="flex items-center space-x-1 text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 self-start sm:self-auto">
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                <span className="font-medium">Class 8B Observation</span>
              </div>
            </div>

            {/* Core Appreciation Message */}
            <div className="prose prose-slate max-w-none">
              <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed sm:leading-loose tracking-wide first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-800 first-letter:mr-2 first-letter:float-left">
                {student.appreciationMessage}
              </p>
            </div>

            {/* Core Teacher Observations Badge Strip */}
            <div className="pt-4 border-t border-amber-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-amber-200/60 flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Attentive & Well-Behaved</span>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-amber-200/60 flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Curious in Computer Science</span>
              </div>
              <div className="bg-[#FAF6EE] p-3 rounded-xl border border-amber-200/60 flex items-center space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Respectful & Full of Potential</span>
              </div>
            </div>

            {/* Handwritten Teacher Sign-off */}
            <div className="pt-4 flex justify-end">
              <div className="text-right">
                <p className="font-handwritten text-2xl sm:text-3xl text-amber-900 leading-tight">
                  With lots of appreciation,
                </p>
                <p className="font-handwritten text-3xl sm:text-4xl font-bold text-amber-800">
                  {teacherName} ❤️
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


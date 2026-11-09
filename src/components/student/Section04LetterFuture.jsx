import React, { useState } from 'react';
import { Mail, BookOpen, X, Printer, ZoomIn, ZoomOut, Sparkles, Feather } from 'lucide-react';

export default function Section04LetterFuture({ student }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSize, setFontSize] = useState('text-base sm:text-lg');

  const increaseFont = () => {
    if (fontSize.includes('text-base')) setFontSize('text-lg sm:text-xl');
    else if (fontSize.includes('text-lg')) setFontSize('text-xl sm:text-2xl');
  };

  const decreaseFont = () => {
    if (fontSize.includes('text-xl')) setFontSize('text-lg sm:text-xl');
    else if (fontSize.includes('text-lg')) setFontSize('text-base sm:text-lg');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="section-4" className="py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Mail className="w-3.5 h-3.5" />
            <span>Chapter 04</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            A Letter to Your Future Self
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto">
            A keepsake time-capsule message written for {student.name} to reopen in years to come.
          </p>
        </div>

        {/* Stationery Preview Card */}
        <div className="relative bg-[#FAF6EE] border-2 border-[#E2D6BE] rounded-3xl p-6 sm:p-10 shadow-paper overflow-hidden">
          
          {/* Decorative Red Ribbon / Wax Seal Motif */}
          <div className="absolute -top-3 left-8 sm:left-12">
            <div className="bg-red-700 text-amber-100 font-mono text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-b-md shadow-md flex items-center space-x-1">
              <Feather className="w-3 h-3 text-amber-300" />
              <span>Time Capsule · 8B</span>
            </div>
          </div>

          <div className="space-y-6 pt-4">
            
            {/* Stationery Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2D6BE] pb-4 gap-2">
              <div>
                <span className="text-[11px] font-mono text-amber-800 uppercase tracking-wider font-semibold">
                  Destination: The Future You
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">
                  To Future {student.name}
                </h3>
              </div>
              <div className="text-xs text-slate-500 font-mono self-start sm:self-auto bg-white/60 px-2.5 py-1 rounded-lg border border-[#E2D6BE]">
                Written in Grade 8B · 2026
              </div>
            </div>

            {/* Letter Preview (First few lines styled on stationery) */}
            <div className="bg-stationery p-5 sm:p-8 rounded-2xl border border-[#E8DFC8] bg-white/80 shadow-inner">
              <p className="font-serif text-slate-700 text-sm sm:text-base leading-relaxed line-clamp-4 italic">
                "{student.letterToFutureSelf.slice(0, 240)}..."
              </p>
            </div>

            {/* Action Button: Read My Letter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-slate-500 font-sans">
                ✦ Keep this message safe. It holds memories of your curiosity and dreams in Class 8B.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-serif font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <BookOpen className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Read My Letter</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Full Letter Modal Viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#FFFDF9] border-2 border-amber-200 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col overflow-hidden">
            
            {/* Modal Controls Header */}
            <div className="flex items-center justify-between border-b border-amber-100 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-base sm:text-lg">
                    Letter to Future Self
                  </h4>
                  <p className="text-[11px] text-amber-700 font-medium">
                    {student.name} · Class 8B Capsule
                  </p>
                </div>
              </div>

              {/* Utility Tools: Zoom & Close */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={decreaseFont}
                  title="Smaller Text"
                  className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={increaseFont}
                  title="Larger Text"
                  className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePrint}
                  title="Print Letter"
                  className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors hidden sm:inline-flex"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Stationery Content */}
            <div className="overflow-y-auto pr-2 bg-stationery p-4 sm:p-6 rounded-2xl border border-amber-100 flex-1">
              <div className={`font-serif text-slate-800 leading-relaxed sm:leading-loose whitespace-pre-line ${fontSize}`}>
                {student.letterToFutureSelf}
              </div>

              <div className="mt-8 pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs text-amber-900">
                <span className="font-mono">Sealed in Grade 8B</span>
                <span className="font-handwritten text-xl font-bold">Never stop wondering ✨</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Close Letter
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}


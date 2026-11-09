import React, { useRef, useState } from 'react';
import { Newspaper, Download, Sparkles, Star, Award, Check } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function Section05CoverStar({ student }) {
  const magazineRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = async () => {
    if (!magazineRef.current || downloading) return;
    try {
      setDownloading(true);
      const canvas = await html2canvas(magazineRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#FAF6EE'
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${student.name.replace(/\s+/g, '_')}_Magazine_Cover_8B.png`;
      link.href = dataUrl;
      link.click();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to capture magazine cover:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="section-5" className="py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Chapter 05</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            You're The Cover Star!
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto">
            Your exclusive Class 8B editorial cover. Bold, visionary, and uniquely yours.
          </p>
        </div>

        {/* Magazine Cover Container */}
        <div className="flex flex-col items-center">
          
          {/* Printable / Capturable Magazine Cover */}
          <div
            ref={magazineRef}
            className="w-full max-w-[420px] bg-[#FDFBF7] border-4 border-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-slate-900 select-none"
          >
            {/* Glossy sheen accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200/40 via-sky-200/30 to-transparent pointer-events-none" />

            {/* Top Masthead */}
            <div className="border-b-2 border-slate-900 pb-3 text-center space-y-1">
              <div className="flex items-center justify-between text-[9px] uppercase tracking-widest font-mono font-bold text-slate-500">
                <span>VOL. 8B · NO. {student.rollNumber}</span>
                <span className="text-amber-800 font-extrabold">SPECIAL KEEPSAKE</span>
                <span>2026 EDITION</span>
              </div>
              <h1 className="font-serif font-black text-3xl sm:text-4xl tracking-tight leading-none text-slate-900 uppercase">
                THE 8B CHRONICLE
              </h1>
              <p className="text-[10px] tracking-widest uppercase font-mono text-slate-600 font-semibold">
                THE LITTLE HALL OF STARS · STUDENT OF DISTINCTION
              </p>
            </div>

            {/* Big Name Typography */}
            <div className="py-8 text-center space-y-2">
              <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase bg-amber-100 text-amber-900 px-3 py-0.5 rounded-full border border-amber-300">
                FEATURING
              </span>
              <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-slate-950 uppercase tracking-tight leading-tight">
                {student.name}
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
            </div>

            {/* Main Headline & Subtitle */}
            <div className="bg-slate-900 text-white p-4 rounded-xl shadow-md my-2 text-center space-y-1.5">
              <p className="text-[10px] font-mono tracking-widest text-amber-400 font-bold uppercase">
                COVER STORY
              </p>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-100 leading-snug">
                "{student.magazineHeadline}"
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {student.magazineSubtitle}
              </p>
            </div>

            {/* Inside This Edition Features */}
            <div className="pt-4 pb-2 space-y-2">
              <p className="text-[9px] font-mono uppercase tracking-wider font-extrabold text-slate-400 border-b border-slate-200 pb-1">
                INSIDE THIS COLLECTOR'S ISSUE:
              </p>
              <ul className="space-y-1.5">
                {student.magazineFeatures.map((feat, i) => (
                  <li key={i} className="text-xs font-serif font-semibold text-slate-800 flex items-start space-x-2">
                    <span className="text-amber-600 font-mono text-[10px] shrink-0 mt-0.5">✦</span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Barcode & Footer Details */}
            <div className="mt-6 pt-3 border-t-2 border-slate-900 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-slate-500 block">Class 8B Collector Series</span>
                <span className="text-[10px] font-bold font-mono text-slate-900">STAR-CODE: {student.pin}</span>
              </div>
              
              {/* Simulated Stylized Barcode */}
              <div className="flex flex-col items-end">
                <div className="w-24 h-7 barcode-lines rounded-xs" />
                <span className="text-[8px] font-mono tracking-tighter text-slate-600">823-8B-2026-STAR</span>
              </div>
            </div>

          </div>

          {/* Download Button */}
          <div className="mt-6 flex flex-col items-center space-y-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-serif font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-200 active:scale-95 disabled:opacity-50"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Magazine Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{downloading ? 'Preparing Image...' : 'Save My Cover (PNG)'}</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-slate-400 font-sans">
              Download your collectible high-resolution magazine cover to keep forever.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}


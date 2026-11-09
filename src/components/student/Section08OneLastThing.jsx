import React, { useRef, useState } from 'react';
import { Heart, Sparkles, Award, Download, Check, Star } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function Section08OneLastThing({ student, teacherName = "Shadha Mam", signature }) {
  const certificateRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCertificate = async () => {
    if (!certificateRef.current || downloading) return;
    try {
      setDownloading(true);
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#FAF6EE'
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${student.name.replace(/\s+/g, '_')}_Star_Certificate_8B.png`;
      link.href = dataUrl;
      link.click();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to download certificate:', err);
    } finally {
      setDownloading(false);
    }
  };

  const finalNote = student.finalMessage || `Thank you for being part of this wonderful classroom, ${student.name}. Every day, your presence, your efforts and your willingness to learn make a difference. Keep asking questions. Keep exploring. Keep being the wonderful person you are. The world has so many things waiting for you. And remember, your story is only getting started.`;

  return (
    <section id="section-8" className="py-14 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter 08</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            One Last Thing...
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto">
            A parting note from your teacher to carry with you beyond Grade 8B.
          </p>
        </div>

        {/* Parting Letter Card */}
        <div className="relative bg-[#FAF6EE] border-2 border-[#E2D6BE] rounded-3xl p-6 sm:p-12 shadow-paper max-w-3xl mx-auto">
          
          <div className="space-y-6">
            
            <div className="flex items-center space-x-3 border-b border-amber-200/80 pb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                <Heart className="w-5 h-5 fill-amber-500 text-amber-700" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-800">
                  Always Remember, {student.name}...
                </h3>
                <p className="text-xs text-amber-800 font-medium">Class 8B Teacher's Farewell Message</p>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-slate-700 leading-relaxed sm:leading-loose">
              {finalNote}
            </p>

            <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>Class 8B · You are one of 29 bright stars</span>
              </div>

              <div className="text-left sm:text-right">
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

        {/* Keepsake Certificate Card (Downloadable) */}
        <div className="max-w-2xl mx-auto pt-6 text-center space-y-4">
          
          <h4 className="font-serif text-lg font-bold text-slate-800">
            Your Official Star Certificate
          </h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Save this digital certificate to your phone gallery as a permanent keepsake of your Grade 8B journey.
          </p>

          {/* Certificate Render Target */}
          <div
            ref={certificateRef}
            className="bg-[#FFFDF9] border-4 border-amber-400/90 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-xl relative overflow-hidden select-none"
          >
            {/* Corner Stars */}
            <Star className="absolute top-3 left-3 w-4 h-4 text-amber-400 fill-amber-400 opacity-60" />
            <Star className="absolute top-3 right-3 w-4 h-4 text-amber-400 fill-amber-400 opacity-60" />
            <Star className="absolute bottom-3 left-3 w-4 h-4 text-amber-400 fill-amber-400 opacity-60" />
            <Star className="absolute bottom-3 right-3 w-4 h-4 text-amber-400 fill-amber-400 opacity-60" />

            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-800 font-bold">
                THE LITTLE HALL OF STARS · CLASS 8B
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                CERTIFICATE OF STELLAR APPRECIATION
              </h3>
            </div>

            <p className="text-xs text-slate-500 font-sans">
              This certificate honors and celebrates the curiosity, respect, and character of
            </p>

            <div className="py-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-900 underline decoration-amber-300 decoration-2 underline-offset-8">
                {student.name}
              </h2>
              <p className="text-xs text-amber-800 font-mono mt-2 font-medium">
                Star #{student.rollNumber} · {student.tagline}
              </p>
            </div>

            <p className="text-xs text-slate-600 font-sans italic max-w-md mx-auto leading-relaxed">
              "Every star shines differently. May you always keep your curiosity alive, dream fearlessly, and remember how special you are."
            </p>

            <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-left text-[11px] text-slate-600 font-mono">
              <div>
                <span className="block text-[9px] uppercase text-slate-400">CLASS</span>
                <span className="font-bold text-slate-800">Grade 8B · 2026</span>
              </div>
              <div className="text-right">
                <span className="block text-[9px] uppercase text-slate-400">PRESENTED BY</span>
                <span className="font-bold text-amber-900">{teacherName} ❤️</span>
              </div>
            </div>

          </div>

          {/* Download Certificate Button */}
          <div className="pt-2">
            <button
              onClick={handleDownloadCertificate}
              disabled={downloading}
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-amber-700 hover:bg-amber-800 text-white font-serif font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-200 active:scale-95 disabled:opacity-50"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Certificate Saved!</span>
                </>
              ) : (
                <>
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>{downloading ? 'Generating Certificate...' : 'Save My Star Certificate (PNG)'}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}


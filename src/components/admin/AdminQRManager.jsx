import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { Printer, Download, Star, QrCode, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';

export default function AdminQRManager({ students }) {
  const [qrImages, setQrImages] = useState({});
  const [baseUrl, setBaseUrl] = useState(window.location.origin);
  const [generating, setGenerating] = useState(true);

  // Generate QR codes for all 29 students
  useEffect(() => {
    generateAllQRs();
  }, [baseUrl, students]);

  const generateAllQRs = async () => {
    setGenerating(true);
    const newImages = {};

    for (const student of students) {
      // URL points to student login with their PIN pre-filled
      const targetUrl = `${baseUrl.replace(/\/$/, '')}/login?pin=${student.pin}`;
      try {
        const dataUrl = await QRCode.toDataURL(targetUrl, {
          width: 320,
          margin: 1.5,
          color: {
            dark: '#0F172A', // Crisp dark navy
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'H'
        });
        newImages[student.pin] = dataUrl;
      } catch (err) {
        console.error('Error generating QR for', student.name, err);
      }
    }

    setQrImages(newImages);
    setGenerating(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSingleQR = (student) => {
    const dataUrl = qrImages[student.pin];
    if (!dataUrl) return;
    const link = document.createElement('a');
    link.download = `QR_${student.rollNumber}_${student.name.replace(/\s+/g, '_')}.png`;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="space-y-6">
      
      {/* Top Controls Box (Hidden during print) */}
      <div className="no-print bg-white p-5 rounded-2xl border border-amber-200 shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-lg text-slate-800 flex items-center space-x-2">
              <QrCode className="w-5 h-5 text-amber-600" />
              <span>Printable QR Cards for All 29 Stars</span>
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Each QR code brings the student directly to their personal login screen with their PIN pre-filled.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              disabled={generating}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-serif font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>Print All Cards (A4 Sheet)</span>
            </button>
          </div>
        </div>

        {/* Base URL Input (Allows teacher to customize to deployed Netlify URL) */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-xs font-semibold text-slate-600 shrink-0">
            Deployed Website Base URL:
          </label>
          <div className="flex-1 flex items-center space-x-2">
            <input
              type="url"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="e.g. https://8b-little-world.netlify.app"
              className="w-full text-xs font-mono p-2 rounded-lg border border-slate-200 focus:border-amber-500 outline-none"
            />
            <button
              onClick={generateAllQRs}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
              title="Regenerate QR Codes"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Printable Cards Grid (Optimized for A4 Paper) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 print:grid-cols-3 print:gap-4">
        {students.map((student) => {
          const qrSrc = qrImages[student.pin];

          return (
            <div
              key={student.pin}
              className="bg-white border-2 border-[#E2D6BE] rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-sm relative overflow-hidden break-inside-avoid print:shadow-none print:border-slate-800 print:p-4"
            >
              {/* Corner Star Details */}
              <Star className="absolute top-2 left-2 w-3 h-3 text-amber-400 fill-amber-400 opacity-60" />
              <Star className="absolute top-2 right-2 w-3 h-3 text-amber-400 fill-amber-400 opacity-60" />

              {/* Card Header Branding */}
              <div className="space-y-0.5 mb-2">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-800 block">
                  The Little Hall of Stars · Class 8B
                </span>
                <h4 className="font-serif font-extrabold text-base text-slate-900 leading-tight">
                  {student.name}
                </h4>
                <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-500">
                  <span className="font-bold text-slate-700">Roll #{student.rollNumber}</span>
                  <span>•</span>
                  <span className="font-bold text-amber-700">PIN: {student.pin}</span>
                </div>
              </div>

              {/* High-Resolution QR Code */}
              <div className="w-40 h-40 sm:w-44 sm:h-44 bg-white p-2 border border-slate-200 rounded-xl flex items-center justify-center my-1 shadow-inner print:border-slate-400">
                {qrSrc ? (
                  <img
                    src={qrSrc}
                    alt={`QR Code for ${student.name}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-[10px] text-slate-400 font-mono">Generating QR...</div>
                )}
              </div>

              {/* Instruction & Call to Action */}
              <div className="mt-2 space-y-1">
                <p className="text-[10px] font-medium text-slate-700 font-sans tracking-tight">
                  Scan with your phone to open your world
                </p>
                <p className="text-[8px] font-mono text-slate-400 uppercase">
                  Class 8B Children's Day Keepsake Edition
                </p>
              </div>

              {/* Single Download button (Hidden during print) */}
              <div className="mt-3 pt-2 border-t border-slate-100 w-full no-print flex items-center justify-center">
                <button
                  onClick={() => handleDownloadSingleQR(student)}
                  className="inline-flex items-center space-x-1 text-[11px] font-semibold text-amber-800 hover:text-amber-900 px-3 py-1 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>Download QR</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}


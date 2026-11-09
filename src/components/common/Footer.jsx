import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#EAE3D6] bg-[#FAF6EE] py-12 px-4 relative z-10 no-print">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        {/* Constellation Stars */}
        <div className="flex items-center justify-center space-x-2 text-amber-500">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Sparkles className="w-5 h-5 text-amber-500 animate-pulse-slow" />
          <Star className="w-4 h-4 fill-amber-400" />
          <Star className="w-3.5 h-3.5 fill-amber-400" />
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
          The Little Hall of Stars · Class 8B
        </h3>

        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          "The world has 29 little stars. Every star shines with its own unique wavelength, learning and growing in its own beautiful way."
        </p>

        <div className="flex items-center justify-center space-x-1.5 text-xs text-amber-900/80 font-medium">
          <span>Created with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-bounce" />
          <span>by your Teacher · Grade 8B Keepsake</span>
        </div>

        {/* Discreet link to Teacher Admin */}
        <div className="pt-6 border-t border-amber-200/50 flex items-center justify-between text-[11px] text-slate-400 max-w-sm mx-auto">
          <span>© 2026 Class 8B Family</span>
          <Link
            to="/admin"
            className="hover:text-amber-800 flex items-center space-x-1 transition-colors group"
          >
            <ShieldCheck className="w-3 h-3 text-slate-400 group-hover:text-amber-600" />
            <span>Teacher's Desk</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}


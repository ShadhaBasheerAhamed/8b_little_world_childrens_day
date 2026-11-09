import React from 'react';
import {
  Compass, Ear, Code, ShieldCheck, Sparkles, Lightbulb, Heart, Cpu,
  Brain, Zap, Terminal, Feather, BookOpen, Star, Activity, Users,
  Award, Smile, Sun, HelpCircle, Eye, Shield, CheckCircle, ZapOff, CheckCircle2
} from 'lucide-react';

const iconMap = {
  Compass, Ear, Code, ShieldCheck, Sparkles, Lightbulb, Heart, Cpu,
  Brain, Zap, Terminal, Feather, BookOpen, Star, Activity, Users,
  Award, Smile, Sun, HelpCircle, Eye, Shield, CheckCircle, CheckCircle2
};

export default function Section03Superpowers({ student }) {
  return (
    <section id="section-3" className="py-12 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Chapter 03</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-800">
            Your Superpowers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-lg mx-auto">
            These are the inner strengths and positive habits that make {student.name} shine in Class 8B.
          </p>
        </div>

        {/* Superpower Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {student.strengths.map((strength, index) => {
            const IconComponent = iconMap[strength.icon] || Star;

            return (
              <div
                key={index}
                className="group relative bg-[#FAF6EE] hover:bg-white border border-[#E8DFC8] hover:border-amber-300 rounded-2xl p-5 shadow-sm hover:shadow-paper-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Micro accent dot */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 group-hover:bg-amber-200/80 border border-amber-200 text-amber-800 flex items-center justify-center transition-colors shadow-inner">
                    <IconComponent className="w-5 h-5 text-amber-700 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-700/60 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/50">
                    Power #{index + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg font-bold text-slate-800 group-hover:text-amber-900 transition-colors">
                    {strength.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-100/80 flex items-center space-x-1.5 text-[11px] font-medium text-amber-800">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                  <span>Nurtured in Class 8B</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


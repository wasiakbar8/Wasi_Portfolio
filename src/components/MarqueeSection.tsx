import React from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Smartphone,
  Sparkles,
  Terminal,
  Globe2,
  Database,
  Flame,
  GitBranch,
  Bot,
  Zap,
} from 'lucide-react';

const pureTechItems = [
  { name: 'React.js', tag: 'Frontend', icon: Code2, color: 'from-cyan-500/20 to-blue-500/20', borderColor: 'border-cyan-500/40', textColor: 'text-cyan-400' },
  { name: 'React Native', tag: 'Mobile App', icon: Smartphone, color: 'from-blue-500/20 to-indigo-500/20', borderColor: 'border-blue-500/40', textColor: 'text-blue-400' },
  { name: 'TypeScript', tag: 'Language', icon: Terminal, color: 'from-sky-500/20 to-blue-600/20', borderColor: 'border-sky-500/40', textColor: 'text-sky-400' },
  { name: 'Gemini AI', tag: 'Artificial Intelligence', icon: Bot, color: 'from-purple-500/20 to-pink-500/20', borderColor: 'border-purple-500/40', textColor: 'text-purple-400' },
  { name: 'Firebase', tag: 'Backend & DB', icon: Flame, color: 'from-amber-500/20 to-orange-500/20', borderColor: 'border-amber-500/40', textColor: 'text-amber-400' },
  { name: 'Tailwind CSS', tag: 'Styling Engine', icon: Layers, color: 'from-teal-500/20 to-cyan-500/20', borderColor: 'border-teal-500/40', textColor: 'text-teal-400' },
  { name: 'JavaScript ES6+', tag: 'Core Logic', icon: Zap, color: 'from-yellow-500/20 to-amber-500/20', borderColor: 'border-yellow-500/40', textColor: 'text-yellow-400' },
  { name: 'Expo', tag: 'Mobile SDK', icon: Cpu, color: 'from-violet-500/20 to-purple-600/20', borderColor: 'border-violet-500/40', textColor: 'text-violet-400' },
  { name: 'RESTful APIs', tag: 'Integration', icon: Globe2, color: 'from-emerald-500/20 to-teal-500/20', borderColor: 'border-emerald-500/40', textColor: 'text-emerald-400' },
  { name: 'Git & GitHub', tag: 'Version Control', icon: GitBranch, color: 'from-orange-500/20 to-red-500/20', borderColor: 'border-orange-500/40', textColor: 'text-orange-400' },
  { name: 'Firestore DB', tag: 'Cloud Database', icon: Database, color: 'from-amber-600/20 to-yellow-500/20', borderColor: 'border-amber-600/40', textColor: 'text-amber-300' },
  { name: 'HTML5 & CSS3', tag: 'Markup & Style', icon: Sparkles, color: 'from-cyan-600/20 to-blue-700/20', borderColor: 'border-cyan-600/40', textColor: 'text-cyan-300' },
];

export const MarqueeSection: React.FC = () => {
  // Duplicating the list for a seamless CSS infinite loop
  const duplicatedTechItems = [...pureTechItems, ...pureTechItems];

  return (
    <section className="bg-[#0C0C0C] pt-12 sm:pt-16 pb-12 overflow-hidden w-full relative z-20 border-y border-[#D7E2EA]/10">
      {/* Container with group hover state to pause track on hover */}
      <div className="w-full overflow-hidden group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedTechItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`tech-item-${i}`}
                className={`w-[260px] sm:w-[320px] h-[110px] sm:h-[130px] rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-4 sm:p-5 flex items-center gap-4 flex-shrink-0 shadow-xl backdrop-blur-md mx-2.5 transition-transform duration-300 hover:scale-105 select-none`}
              >
                <div className={`p-3 rounded-xl bg-[#0C0C0C]/80 ${item.textColor} border border-white/10 shrink-0`}>
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-light">
                    {item.tag}
                  </span>
                  <span className="text-base sm:text-xl font-bold uppercase tracking-tight text-[#D7E2EA] truncate">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

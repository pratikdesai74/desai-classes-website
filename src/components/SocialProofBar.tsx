"use client";

const items = [
  { label: "JEE AIR 155",     name: "Bharat Charan",      icon: "🥇" },
  { label: "NEET 603",        name: "Vaishnavi Digole",   icon: "🏥" },
  { label: "CET 99.9%",       name: "Pallavi Bharane",    icon: "🎯" },
  { label: "IIT Madras",      name: "Hanumant Malkapure", icon: "🏛️" },
  { label: "IIT Indore",      name: "Umesh Mali",         icon: "🏛️" },
  { label: "CET 99.28%",      name: "Kunal More",         icon: "⭐" },
  { label: "NEET 587",        name: "Ganesh More",        icon: "🏥" },
  { label: "4.8★ Google",     name: "210+ Reviews",       icon: "⭐" },
  { label: "30+ IIT & NITs",  name: "Our Students",       icon: "🏆" },
  { label: "35+ Years",       name: "Of Excellence",      icon: "🎓" },
  { label: "Phy·Chem·Bio 99", name: "Sakshi Kadu",        icon: "✨" },
  { label: "PCM 97.61%",      name: "Trupti Chaudhari",   icon: "📈" },
];

// Duplicate for seamless loop
const track = [...items, ...items];

export default function SocialProofBar() {
  return (
    <div className="bg-[#190B62] border-y border-[#E8C547]/20 py-3 overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#190B62] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#190B62] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-6 w-max"
        style={{
          animation: "ticker 38s linear infinite",
        }}
      >
        {track.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 flex-shrink-0 hover:bg-white/14 transition-colors"
          >
            <span className="text-sm">{item.icon}</span>
            <span className="text-[#E8C547] font-extrabold text-sm">{item.label}</span>
            <span className="text-white/50 text-xs">—</span>
            <span className="text-white/75 text-xs font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

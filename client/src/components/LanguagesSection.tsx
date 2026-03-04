/**
 * LanguagesSection Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Language proficiency display with visual indicators
 * - Glassmorphic cards with hover effects
 */

import { useEffect, useRef, useState } from 'react';

interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100
}

const languages: Language[] = [
  {
    name: 'Português',
    level: 'Nativo',
    proficiency: 100
  },
  {
    name: 'Inglês',
    level: 'Intermediário',
    proficiency: 70
  }
];

export default function LanguagesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="languages" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Idiomas
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`transition-all duration-700 transform ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group h-full">
                {/* Language Name */}
                <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                  {lang.name}
                </h3>

                {/* Level Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
                    {lang.level}
                  </span>
                </div>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Proficiência</span>
                    <span className="text-cyan-400 font-semibold text-sm">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden border border-cyan-500/20">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: visibleItems.includes(index) ? `${lang.proficiency}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * EducationSection Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Timeline layout with glassmorphic cards
 * - Smooth entrance animations
 * - Responsive design for mobile and desktop
 */

import { useEffect, useRef, useState } from 'react';

interface Education {
  id: number;
  type: 'degree' | 'course';
  title: string;
  institution: string;
  period: string;
  description?: string;
}

const educationData: Education[] = [
  {
    id: 1,
    type: 'degree',
    title: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'SENAC - Santo Amaro',
    period: '2018 - 2023',
    description: 'Formação técnica completa em desenvolvimento de sistemas com foco em análise e implementação.'
  },
  {
    id: 2,
    type: 'course',
    title: 'Angular 7+ e 17',
    institution: 'Alura',
    period: '2023 - 2024'
  },
  {
    id: 3,
    type: 'course',
    title: 'TDD (Test Driven Development)',
    institution: 'Alura',
    period: '2022 - 2023'
  },
  {
    id: 4,
    type: 'course',
    title: 'Android com Java e Kotlin',
    institution: 'Udemy / Alura',
    period: '2021 - 2022'
  }
];

export default function EducationSection() {
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
    <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Educação & Cursos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-pink-500 rounded-full" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className={`transition-all duration-700 transform ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex justify-end">
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full border-4 border-cyan-500 ${
                        item.type === 'degree'
                          ? 'bg-pink-500'
                          : 'bg-cyan-500'
                      } transition-all duration-300`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`glass p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:col-start-2' : ''
                  }`}>
                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        item.type === 'degree'
                          ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                          : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      }`}>
                        {item.type === 'degree' ? 'Formação' : 'Curso'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 font-mono">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <p className="text-cyan-400 font-semibold mb-2">
                      {item.institution}
                    </p>

                    {/* Period */}
                    <p className="text-gray-400 text-sm mb-3">
                      {item.period}
                    </p>

                    {/* Description */}
                    {item.description && (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

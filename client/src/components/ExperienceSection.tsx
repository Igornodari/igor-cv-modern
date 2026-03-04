/**
 * ExperienceSection Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Glassmorphic cards with hover effects
 * - Timeline layout with stagger animations
 * - Responsive grid for different screen sizes
 */

import { useEffect, useRef, useState } from 'react';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Uliving Student Housing',
    position: 'Desenvolvedor Fullstack',
    period: 'Junho 2024 - Janeiro 2026',
    description: 'Atuação fullstack com Angular, NestJS e TypeORM em módulos de inspeções, manutenção e fluxos contratuais.',
    technologies: ['Angular', 'NestJS', 'TypeORM', 'RabbitMQ', 'MongoDB'],
    highlights: [
      'Criação de integrações entre microsserviços com RabbitMQ',
      'Liderança técnica parcial em novas features e automações',
      'Desenvolvimento de componentes reutilizáveis e escaláveis'
    ]
  },
  {
    id: 2,
    company: 'Foursys',
    position: 'Frontend Angular Developer',
    period: 'Setembro 2023 - Abril 2024',
    description: 'Desenvolvimento de aplicações web em Angular para clientes corporativos com integração de APIs REST.',
    technologies: ['Angular', 'TypeScript', 'REST APIs', 'GitHub', 'Real-time Services'],
    highlights: [
      'Integração com APIs REST e versionamento em GitHub',
      'Implementação de serviços em tempo real',
      'Desenvolvimento para clientes corporativos'
    ]
  },
  {
    id: 3,
    company: 'NTT Data',
    position: 'Frontend Angular Developer',
    period: 'Agosto 2018 - Junho 2023',
    description: 'Criação de componentes modulares e páginas SPA em Angular com aplicação de TDD e boas práticas.',
    technologies: ['Angular', 'TypeScript', 'TDD', 'Jasmine', 'RxJS'],
    highlights: [
      'Criação de componentes modulares e páginas SPA',
      'Aplicação de testes unitários e boas práticas de TDD',
      'Colaboração com times ágeis e UX para soluções escaláveis'
    ]
  }
];

export default function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Experiência Profissional
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`glass p-8 rounded-xl border border-cyan-500/20 transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono mb-2">
                    {exp.position}
                  </h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>
                <p className="text-gray-400 text-sm md:text-right mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                  Destaques
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-pink-500 mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                  Tecnologias
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

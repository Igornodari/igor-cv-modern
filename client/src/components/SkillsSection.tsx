/**
 * SkillsSection Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Grid layout with glassmorphic skill cards
 * - Hover animations with scale and glow effects
 * - Categorized skills display
 */

import { useEffect, useRef, useState } from 'react';

interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    color: 'from-cyan-400 to-blue-500',
    skills: ['Angular 8+', 'Angular Material', 'Bootstrap', 'FlexBox', 'SCSS/Sass', 'i18n', 'Echarts', 'NgRx', 'Micro-Frontend']
  },
  {
    name: 'Backend',
    color: 'from-pink-500 to-rose-500',
    skills: ['Node.js', 'NestJS', 'TypeORM', 'MongoDB', 'MySQL', 'Firebase', 'APIs REST', 'Microservices']
  },
  {
    name: 'Ferramentas',
    color: 'from-purple-400 to-indigo-500',
    skills: ['Git', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Postman', 'Bamboo', 'Jasmine']
  },
  {
    name: 'Outros',
    color: 'from-orange-400 to-red-500',
    skills: ['React', 'Java', 'Kotlin', 'SpringMVC', 'Ionic']
  }
];

export default function SkillsSection() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoriesRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCategories.includes(index)) {
              setVisibleCategories((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    categoriesRef.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => observer.disconnect();
  }, [visibleCategories]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Habilidades Técnicas
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              ref={(el) => {
                categoriesRef.current[categoryIndex] = el;
              }}
              className={`transition-all duration-700 transform ${
                visibleCategories.includes(categoryIndex)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              {/* Category Card */}
              <div className="glass p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group h-full">
                {/* Category Header */}
                <div className={`flex items-center gap-3 mb-6`}>
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white font-mono">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-xs font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass p-8 rounded-xl border border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">7+</div>
              <p className="text-gray-300">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 font-mono mb-2">30+</div>
              <p className="text-gray-300">Tecnologias Dominadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 font-mono mb-2">3</div>
              <p className="text-gray-300">Empresas Principais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

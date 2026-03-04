/**
 * HeroSection Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Parallax background with gradient animation
 * - Glassmorphic card overlay
 * - Smooth entrance animations
 * - Responsive typography hierarchy
 */

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663120071271/5TDamJ7U5rhoDqcim24HLs/hero-gradient-abstract-eTnCTPcLd3QLKxHhjuuSNg.webp)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e27]" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        {/* Main Content Card */}
        <div className="glass p-8 md:p-12 max-w-2xl w-full animate-fade-in">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Igor Leal Nodari
          </h1>

          {/* Subtitle with Gradient */}
          <p className="text-lg md:text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Pleno Fullstack Developer
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            Especializado em Angular, NestJS e arquitetura de microsserviços. 
            Desenvolvendo soluções escaláveis e robustas com foco em qualidade e inovação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#experience"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Explorar Experiência
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

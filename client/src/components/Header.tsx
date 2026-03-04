/**
 * Header Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Sticky navigation with glassmorphic design
 * - Smooth scroll navigation
 * - Responsive mobile menu
 */

import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Início', href: '#' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Educação', href: '#education' },
  { label: 'Idiomas', href: '#languages' },
  { label: 'Contato', href: '#contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-cyan-500/20 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => handleNavClick('#')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center font-bold text-white font-mono text-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
            IL
          </div>
          <span className="hidden sm:inline text-white font-bold font-mono group-hover:text-cyan-400 transition-colors">
            Igor Leal
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-cyan-400 font-semibold transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
        >
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-cyan-500/20 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-cyan-400 font-semibold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-cyan-500/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

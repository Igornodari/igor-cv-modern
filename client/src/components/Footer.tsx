/**
 * Footer Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Minimal footer with contact links
 * - Glassmorphic design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-cyan-500/20 py-8 bg-gradient-to-b from-[#0a0e27] to-[#1a1a3e]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold font-mono mb-4">Igor Leal Nodari</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor senior fullstack com paixão por criar soluções escaláveis e inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold font-mono mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Experiência
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold font-mono mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/igor-leal-nodari-512b7914a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-lg">💼</span>
              </a>
              <a
                href="https://github.com/igornodari"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-lg">💻</span>
              </a>
              <a
                href="mailto:igor.nods@gmail.com"
                className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-lg">✉️</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            &copy; {currentYear} Igor Leal Nodari. Todos os direitos reservados.
          </p>
          <p className="mt-4 md:mt-0">
            Desenvolvido com <span className="text-pink-500">♥</span> usando React e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

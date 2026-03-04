import { useState } from 'react';

interface ContactInfo {
  label: string;
  value: string;
  href: string;
  icon: string;
}

const contactInfo: ContactInfo[] = [
  {
    label: 'Email',
    value: 'igor.nods@gmail.com',
    href: 'mailto:igor.nods@gmail.com',
    icon: '✉️',
  },
  {
    label: 'Telefone',
    value: '(11) 94264-7380',
    href: 'tel:+5511942647380',
    icon: '📱',
  },
  {
    label: 'LinkedIn',
    value: 'Igor Leal Nodari',
    href: 'https://www.linkedin.com/in/igor-leal-nodari-512b7914a/',
    icon: '💼',
  },
  {
    label: 'GitHub',
    value: 'igornodari',
    href: 'https://github.com/igornodari',
    icon: '💻',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Entre em Contato
          </h2>
          <span className="block h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </header>

        {/* Layout principal (Flex responsivo) */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Coluna esquerda */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Estou sempre aberto a novas oportunidades e desafios. Sinta-se livre para entrar em contato comigo através
              de qualquer um dos canais abaixo.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass block w-full p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="flex items-center gap-4">
                    {/* Ícone com largura fixa */}
                    <span className="w-10 h-10 shrink-0 flex items-center justify-center text-2xl">
                      {info.icon}
                    </span>

                    {/* Texto ocupa o resto */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        {info.label}
                      </span>

                      <span className="text-white font-medium group-hover:text-cyan-400 transition-colors break-words">
                        {info.value}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Coluna direita (Form) */}
          <div className="flex-1 min-w-0 glass p-8 rounded-xl border border-cyan-500/20">
            {submitted ? (
              <div className="min-h-[320px] flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-300">Obrigado por entrar em contato. Responderei em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-cyan-400 uppercase tracking-wider"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-cyan-400 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-cyan-400 uppercase tracking-wider"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-gray-900 font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] shadow-lg shadow-cyan-500/40 hover:shadow-pink-500/40"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
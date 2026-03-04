/**
 * ContactSection Component
 * 
 * Design Philosophy: Tech-Forward Glassmorphism
 * - Contact form with glassmorphic design
 * - Social links with hover animations
 * - Responsive layout
 */

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
    icon: '✉️'
  },
  {
    label: 'Telefone',
    value: '(11) 94264-7380',
    href: 'tel:+5511942647380',
    icon: '📱'
  },
  {
    label: 'LinkedIn',
    value: 'Igor Leal Nodari',
    href: 'https://www.linkedin.com/in/igor-leal-nodari-512b7914a/',
    icon: '💼'
  },
  {
    label: 'GitHub',
    value: 'igornodari',
    href: 'https://github.com/igornodari',
    icon: '💻'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a3e] to-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Estou sempre aberto a novas oportunidades e desafios. Sinta-se livre para entrar em contato comigo através de qualquer um dos canais abaixo.
            </p>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{info.icon}</span>
                    <div>
                      <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-xl border border-cyan-500/20">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-300">
                    Obrigado por entrar em contato. Responderei em breve.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
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

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
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

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/50 hover:shadow-pink-500/50"
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

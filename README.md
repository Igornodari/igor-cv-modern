# Igor Leal Nodari - Currículo Online

Currículo online moderno desenvolvido em React com design tech-forward glassmorphism. Apresenta experiência profissional, habilidades técnicas, educação e informações de contato de forma interativa e responsiva.

## 🎨 Design

### Filosofia de Design: Tech-Forward Glassmorphism

O projeto utiliza uma abordagem de design moderna que combina:

- **Glassmorphism:** Cards com efeito de vidro fosco (backdrop blur) e transparência
- **Gradientes Animados:** Transições suaves entre cores cyan, magenta e roxo
- **Parallax:** Efeito de profundidade ao fazer scroll
- **Animações Suaves:** Fade-in, slide-in e stagger animations para elementos

### Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| Azul Escuro | `#0a0e27` | Background principal |
| Roxo Profundo | `#1a1a3e` | Background secundário |
| Cyan | `#00d9ff` | Acentos primários |
| Magenta | `#ff006e` | Acentos secundários |
| Roxo | `#7209b7` | Acentos terciários |

### Tipografia

- **Títulos:** Space Mono (monospace, 400/700)
- **Corpo:** Fira Sans (sans-serif, 400/500/600/700)

## 📁 Estrutura do Projeto

```
client/
├── public/              # Arquivos estáticos (favicon, robots.txt)
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── LanguagesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── ErrorBoundary.tsx
│   ├── contexts/        # React Contexts
│   ├── App.tsx          # Componente raiz
│   ├── main.tsx         # Entry point
│   ├── index.css        # Estilos globais
│   └── animations.css   # Animações avançadas
├── index.html           # HTML template
└── package.json         # Dependências
```

## 🚀 Componentes

### Header
- Navegação sticky com glassmorphism
- Menu responsivo para mobile
- Links de navegação suave com scroll

### HeroSection
- Parallax background com gradiente animado
- Card glassmorphic com apresentação principal
- CTA buttons com hover effects
- Scroll indicator animado

### ExperienceSection
- Timeline de experiências profissionais
- Cards com glassmorphism
- Destaques e tecnologias utilizadas
- Animações ao entrar na viewport (Intersection Observer)

### SkillsSection
- Grid de habilidades técnicas categorizado
- 4 categorias: Frontend, Backend, Ferramentas, Outros
- Cards com hover effects e glow
- Estatísticas de expertise

### EducationSection
- Timeline vertical de educação e cursos
- Alternância de posição dos cards (left/right)
- Badges de tipo (Formação/Curso)
- Animações staggered

### LanguagesSection
- Display de proficiência em idiomas
- Barras de progresso animadas
- Badges de nível de proficiência

### ContactSection
- Formulário de contato funcional
- Cards de informações de contato
- Links para email, telefone, LinkedIn e GitHub
- Feedback visual ao enviar

### Footer
- Links rápidos
- Redes sociais
- Informações de copyright

## 🎯 Funcionalidades

### Responsividade
- Design mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Navegação adaptativa para mobile

### Animações
- Fade-in ao scroll (Intersection Observer)
- Parallax effect no hero
- Stagger animations em listas
- Hover effects em cards e botões
- Transições suaves (300-500ms)

### Performance
- Lazy loading ready
- Otimização de imagens (WebP)
- CSS otimizado com Tailwind
- Sem dependências pesadas

### Acessibilidade
- Semantic HTML
- ARIA labels onde necessário
- Foco visível em elementos interativos
- Suporte a prefers-reduced-motion

## 🛠️ Tecnologias

- **React 19:** Framework UI
- **Tailwind CSS 4:** Utility-first CSS
- **TypeScript:** Type safety
- **Vite:** Build tool moderno
- **Shadcn/ui:** Componentes UI acessíveis

## 📦 Instalação e Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview
```

## 🌐 Deploy

O projeto está pronto para ser hospedado em qualquer plataforma estática:

- **Manus:** Deploy automático com custom domain
- **GitHub Pages:** Deploy via GitHub Actions
- **Vercel:** Deploy com integração Git
- **Netlify:** Deploy com integração Git

## 📝 Customização

### Adicionar Novas Seções
1. Criar novo componente em `src/components/`
2. Importar em `App.tsx`
3. Adicionar à navegação em `Header.tsx`

### Alterar Cores
Editar as variáveis CSS em `client/src/index.css`:
- `:root` para tema light
- `.dark` para tema dark

### Modificar Tipografia
Atualizar imports de fontes em `client/index.html` e classes em `index.css`

## 📄 Licença

Este projeto é de uso pessoal de Igor Leal Nodari.

## 📧 Contato

- **Email:** igor.nods@gmail.com
- **LinkedIn:** [Igor Leal Nodari](https://www.linkedin.com/in/igor-leal-nodari-512b7914a/)
- **GitHub:** [igornodari](https://github.com/igornodari)

---

Desenvolvido com ♥ usando React e Tailwind CSS

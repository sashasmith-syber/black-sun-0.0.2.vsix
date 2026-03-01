# 🤖 Sasha Smith - Developer Portfolio

A Next.js portfolio website showcasing AI innovations, music technology projects, and cutting-edge software development work.

![Version](https://img.shields.io/badge/version-1.0.0-cyan)
![Next.js](https://img.shields.io/badge/Next.js-14.2.0-black)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ About Sasha Smith

AI Innovator and Full-Stack Developer specializing in:

- 🎭 **Persona AI Injection** - Revolutionary approach to AI personality integration
- 🎵 **MusicGen Experimentation** - Advanced prompt engineering for AI music generation
- 🔷 **SOUNDBLUEPRINT™©** - Proprietary framework for AI-driven sound design
- ⚡ **Persona-Driven Prompt Engines** - Custom AI systems for enhanced interactions

## 🚀 Featured Projects

### HIKARU AI
Persona-Driven AI Agent & Prompt Engine with custom persona injection and real-time AI responses.

### AURALITH AI
Sound Architect featuring AI-powered music composition, MusicGen integration, and SOUNDBLUEPRINT™© framework.

### CODEX PRIME
Advanced Prompt Engine with sophisticated generation capabilities and multi-model support.

### EXTRACTOR 1.0
Image-Text Prompt Generator with visual analysis and AI-powered text generation.

### MPC ATLAS AI
Akai MPC Mentor providing interactive tutorials, AI-powered advice, and composition assistance.

### BLACK SUN Theme
Cyberpunk VS Code & Browser Theme Ecosystem with neon aesthetics and OLED optimization.

## 🎨 Black Sun Theme

This portfolio uses the **Black Sun** cyberpunk color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#080808` | Background |
| Cyan | `#00ffff` | Primary accent, borders |
| Green | `#00ff00` | Secondary accent, highlights |
| Yellow | `#ffcc66` | Warnings, special text |
| Blue | `#99ccff` | Links, info |
| Red | `#ff0000` | Errors, alerts |
| White | `#eeffff` | Text |
| Gray | `#546E7A` | Muted text |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd hikaru-nextjs
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (optional for full features)
```bash
cp .env.example .env.local
```

Edit `.env.local` and add API keys if using chat/music features:
```env
GROK_API_KEY=your_grok_api_key_here
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/auth
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hikaru-nextjs/
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   │   ├── grok/           # Grok AI endpoint
│   │   └── spotify/        # Spotify endpoints
│   ├── chat/               # AI chat page
│   ├── music/              # Music recommendations page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Portfolio landing page
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # UI primitives
│   ├── features/           # Feature components
│   └── layout/             # Layout components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript type checking
```

## 🎯 Features

### Portfolio Landing Page
- Hero section with professional introduction
- Areas of expertise showcase
- Featured projects grid with detailed information
- Contact section with links
- Responsive design with cyberpunk aesthetics

### AI Chat Interface (Optional Feature)
- Real-time AI chat powered by Grok
- Cyberpunk-styled interface
- Message history

### Music Recommendations (Optional Feature)
- BPM-based track discovery
- Spotify integration
- Playlist creation

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables (if using AI/music features)
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔗 Links

- [GitHub Profile](https://github.com/sashasmith-syber)
- [HIKARU AI](https://github.com/sashasmith-syber/HIKARU-AI)
- [AURALITH AI](https://github.com/sashasmith-syber/AURALITH-AI)
- [CODEX PRIME](https://github.com/sashasmith-syber/CODEX-PRIME)
- [EXTRACTOR 1.0](https://github.com/sashasmith-syber/EXTRACTOR-1.0)
- [MPC ATLAS AI](https://github.com/sashasmith-syber/MPC-ATLAS-AI)

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Sasha Smith**
- AI Innovator & Developer
- Creator of Persona AI Injection concept
- SOUNDBLUEPRINT™© Developer
- MusicGen Prompt Engineering Expert

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

**Built with 💚 using the Black Sun Theme Ecosystem**

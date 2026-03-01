# 🤖 HIKARU AI - Cyberpunk AI Platform

A Next.js 15 web application featuring AI-powered chat and music recommendations with a stunning cyberpunk aesthetic.

![Version](https://img.shields.io/badge/version-1.0.0-cyan)
![Next.js](https://img.shields.io/badge/Next.js-15.0.0--rc.0-black)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🤖 **AI Chat Interface** - Powered by Grok AI (xAI)
- 🎵 **Music Recommendations** - BPM-based recommendations via Spotify API
- 🎯 **BPM Advisor** - Intelligent tempo recommendations by genre, mood, and activity
- 💼 **Developer Portfolio** - Showcase of projects including Solène Dev Studio inspiration
- 🎨 **Cyberpunk UI** - Neon glows, matrix effects, and terminal aesthetics
- ⚡ **Lightning Fast** - Built with Next.js 15 App Router
- 🔒 **Secure** - OAuth authentication and encrypted API calls
- 📱 **Responsive** - Mobile-first design with TailwindCSS

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Grok API key from [xAI](https://x.ai/)
- Spotify Developer account and API credentials

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

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
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

## 🎨 Black Sun Theme

This project uses the **Black Sun** cyberpunk color palette:

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
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # UI primitives
│   ├── features/           # Feature components
│   └── layout/             # Layout components
├── lib/                    # Utility functions
│   ├── grok.ts            # Grok AI integration
│   ├── spotify.ts         # Spotify API integration
│   └── utils.ts           # Helper functions
├── styles/                 # Additional styles
├── public/                 # Static assets
└── package.json           # Dependencies
```

## 🔧 Configuration

### Grok AI Setup

1. Sign up at [xAI](https://x.ai/)
2. Generate an API key
3. Add to `.env.local` as `GROK_API_KEY`

### Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Add redirect URI: `http://localhost:3000/api/spotify/auth`
4. Copy Client ID and Client Secret to `.env.local`

## 🎯 Usage

### AI Chat

1. Navigate to `/chat`
2. Type your message in the input field
3. Press "SEND" or hit Enter
4. Receive AI-generated responses from Grok

### Music Recommendations

1. Navigate to `/music`
2. Authenticate with Spotify
3. Use the **BPM Advisor** to discover the perfect tempo:
   - Browse by Genre (Hip Hop, House, Techno, etc.)
   - Filter by Mood (energetic, relaxed, euphoric, etc.)
   - Select by Activity (workout, studying, party, etc.)
4. Enter desired BPM or use a recommended value
5. Get personalized track recommendations
6. Create playlists directly to your Spotify account

### Developer Portfolio

- View featured projects on the homepage
- Includes inspiration from public projects like Solène Dev Studio
- Browse projects by category (themes, web apps, libraries)
- Direct links to GitHub repositories and live demos

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript type checking
```

### Adding New Features

1. Create components in `components/`
2. Add API routes in `app/api/`
3. Create pages in `app/`
4. Update styles in `styles/` or `app/globals.css`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'bs-black': '#080808',
  'bs-cyan': '#00ffff',
  // Add your colors here
}
```

### Animations

Add custom animations in `tailwind.config.js`:

```javascript
animation: {
  'your-animation': 'your-animation 2s ease-in-out infinite',
}
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🔒 Security

- API keys are stored in environment variables
- Spotify tokens use HTTP-only cookies
- All API calls are proxied through Next.js API routes
- CORS is properly configured

## 🐛 Troubleshooting

### TypeScript Errors

Run `npm install` to ensure all dependencies are installed.

### API Errors

- Check that all environment variables are set correctly
- Verify API keys are valid
- Check API rate limits

### Spotify Authentication Issues

- Ensure redirect URI matches exactly in Spotify Dashboard
- Check that Client ID and Secret are correct
- Verify scopes are properly configured

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Sasha Smith**

## 🙏 Acknowledgments

- [Grok AI](https://x.ai/) - AI chat capabilities
- [Spotify](https://spotify.com) - Music recommendations
- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Styling

## 🔗 Links

- [Documentation](./docs)
- [Black Sun Theme](../PERESELKA)
- [Report Issues](https://github.com/your-repo/issues)

---

**Built with 💚 using the Black Sun Theme Ecosystem**

# 🚀 HIKARU AI - Setup Instructions

## Quick Start Guide

### Step 1: Install Dependencies

Open a terminal in the `hikaru-nextjs` directory and run:

```bash
npm install
```

**If you encounter dependency conflicts**, use:

```bash
npm install --legacy-peer-deps
```

### Step 2: Set Up Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your API keys:

```env
# Grok AI (xAI)
GROK_API_KEY=your_grok_api_key_here

# Spotify API
SPOTIFY_CLIENT_ID=your_spotify_client_id_here
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret_here
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/auth

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 3: Get API Keys

#### Grok API Key (xAI)
1. Visit: https://x.ai/
2. Sign up for an account
3. Generate an API key
4. Copy to `.env.local`

#### Spotify API Credentials
1. Visit: https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click "Create App"
4. Fill in the details:
   - App Name: HIKARU AI
   - App Description: AI-powered music recommendations
   - Redirect URI: `http://localhost:3000/api/spotify/auth`
5. Copy Client ID and Client Secret to `.env.local`

### Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at: http://localhost:3000

### Step 5: Test the Application

1. **Landing Page**: Navigate to http://localhost:3000
   - Should see the cyberpunk-themed homepage
   - Test navigation links

2. **AI Chat**: Navigate to http://localhost:3000/chat
   - Type a message and press Send
   - Should receive AI-generated responses (requires Grok API key)

3. **Music Page**: Navigate to http://localhost:3000/music
   - Currently under development
   - Will show "404 Not Found" until created

## Troubleshooting

### Issue: Dependencies won't install

**Solution 1**: Use legacy peer deps
```bash
npm install --legacy-peer-deps
```

**Solution 2**: Clear npm cache
```bash
npm cache clean --force
npm install
```

**Solution 3**: Delete node_modules and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Cause**: Dependencies not installed or missing type definitions

**Solution**: Ensure all dependencies are installed:
```bash
npm install
```

### Issue: "Module not found" errors

**Cause**: Missing dependencies or incorrect import paths

**Solution**: 
1. Check that node_modules exists
2. Verify import paths use `@/` prefix for absolute imports
3. Restart the dev server

### Issue: API errors (Grok AI)

**Possible causes**:
- Missing or invalid GROK_API_KEY
- API rate limits exceeded
- Network connectivity issues

**Solution**:
1. Verify API key in `.env.local`
2. Check API key is valid at https://x.ai/
3. Check console for detailed error messages

### Issue: Spotify authentication fails

**Possible causes**:
- Incorrect redirect URI
- Invalid client credentials
- Missing scopes

**Solution**:
1. Verify redirect URI matches exactly: `http://localhost:3000/api/spotify/auth`
2. Check Client ID and Secret are correct
3. Ensure app is not in development mode restrictions

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npm run type-check
```

## Project Structure

```
hikaru-nextjs/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── chat/              # Chat page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── lib/                   # Utility libraries
│   ├── grok.ts           # Grok AI integration
│   ├── spotify.ts        # Spotify integration
│   └── utils.ts          # Helper functions
├── components/            # React components (to be created)
├── styles/               # Additional styles (to be created)
├── public/               # Static assets
└── package.json          # Dependencies
```

## Next Steps

After successful setup:

1. **Test Core Features**
   - Landing page renders correctly
   - Chat interface works with Grok AI
   - Styling and animations display properly

2. **Create Music Page**
   - Implement Spotify authentication UI
   - Add BPM-based recommendations
   - Create playlist generation interface

3. **Add UI Components**
   - Button, Card, Input components
   - Loading states
   - Error boundaries

4. **Deploy to Production**
   - Push to GitHub
   - Deploy to Vercel
   - Configure production environment variables

## Support

For issues or questions:
- Check this setup guide
- Review README.md
- Check DEVELOPMENT_SUMMARY.md
- Review code comments in source files

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Grok AI Docs](https://docs.x.ai/)
- [Spotify Web API](https://developer.spotify.com/documentation/web-api)
- [TailwindCSS](https://tailwindcss.com/docs)

---

**Built with 💚 using the Black Sun Theme Ecosystem**

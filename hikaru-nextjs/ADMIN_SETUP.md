# Admin Dashboard Setup Guide

This guide will help you set up and use the Black Sun Admin Dashboard for managing your portfolio content.

## Prerequisites

- Node.js 18+ installed
- Basic understanding of environment variables
- Access to the repository

## Initial Setup

### 1. Install Dependencies

All required dependencies are already included in `package.json`. If you need to reinstall:

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

### 3. Generate Admin Password Hash

The admin dashboard uses bcrypt for secure password hashing. Use the provided script to generate a password hash:

```bash
node scripts/hash-password.js your_secure_password
```

This will output a bcrypt hash. Copy it and add to your `.env.local` file:

```env
ADMIN_PASSWORD=$2a$10$your_generated_hash_here
```

### 4. Generate NextAuth Secret

Generate a secure secret for NextAuth:

```bash
openssl rand -base64 32
```

Add it to your `.env.local` file:

```env
NEXTAUTH_SECRET=your_generated_secret_here
NEXTAUTH_URL=http://localhost:3000
```

### 5. Complete Environment Configuration

Your `.env.local` should now include:

```env
# Admin Configuration
ADMIN_PASSWORD=$2a$10$your_bcrypt_hash
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Existing API Keys (if you have them)
GROK_API_KEY=your_grok_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/auth
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:
- Main site: http://localhost:3000
- Portfolio: http://localhost:3000/portfolio
- Admin login: http://localhost:3000/admin/login

## Using the Admin Dashboard

### 1. Login

Navigate to http://localhost:3000/admin/login and enter your admin password.

### 2. Dashboard Overview

After logging in, you'll see:
- **Statistics**: Overview of expertise areas, projects, and social links
- **Quick Actions**: Shortcuts to edit different sections
- **Profile Overview**: Current profile information

### 3. Managing Content

#### Edit Profile
- Navigate to `/admin/profile`
- Update your name, title, email, GitHub URL, and bio
- Click "Save Changes"

#### Manage Expertise
- Navigate to `/admin/expertise`
- **Add**: Click "Add New" button
- **Edit**: Click pencil icon on any expertise card
- **Delete**: Click trash icon (with confirmation)
- Fields: Title, Description, Icon (emoji)

#### Manage Projects
- Navigate to `/admin/projects`
- **Add**: Click "Add New" button
- **Edit**: Click pencil icon on any project card
- **Delete**: Click trash icon (with confirmation)
- Fields:
  - Project Name
  - Description
  - Tech Stack (comma-separated)
  - GitHub Link
  - Highlights (one per line)

### 4. View Changes

After making changes in the admin panel:
1. Navigate to `/portfolio` to see the updated portfolio
2. Changes are reflected immediately
3. A backup of the previous data is created automatically

## Security Features

### Authentication
- Password-based authentication using NextAuth.js
- Bcrypt password hashing (10 rounds)
- HTTP-only cookies for session management
- CSRF protection built into NextAuth

### Data Protection
- Input sanitization on all user inputs
- Validation of data structure before saving
- Automatic backups before updates
- Server-side authentication checks on all admin routes

### Best Practices
- Never commit `.env.local` to version control
- Use strong, unique passwords
- Regularly update dependencies
- Keep NEXTAUTH_SECRET secure

## Data Structure

Portfolio data is stored in `data/portfolio.json`:

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your@email.com",
    "github": "https://github.com/yourusername",
    "bio": "Your bio"
  },
  "expertise": [
    {
      "id": "unique-id",
      "title": "Expertise Title",
      "description": "Description",
      "icon": "🎭"
    }
  ],
  "projects": [
    {
      "id": "unique-id",
      "name": "Project Name",
      "description": "Project description",
      "techStack": ["Tech1", "Tech2"],
      "githubLink": "https://github.com/...",
      "highlights": ["Feature 1", "Feature 2"]
    }
  ],
  "socialLinks": [
    {
      "name": "GitHub",
      "url": "https://github.com/...",
      "icon": "github"
    }
  ]
}
```

## API Endpoints

### Public Endpoints
- `GET /api/portfolio` - Fetch portfolio data

### Protected Endpoints (Require Authentication)
- `POST /api/portfolio/update` - Update portfolio data

### Authentication Endpoints
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signout` - Sign out
- `GET /api/auth/session` - Get session status

## Troubleshooting

### Cannot Login
- Verify `ADMIN_PASSWORD` is correctly hashed in `.env.local`
- Check `NEXTAUTH_SECRET` is set
- Clear browser cookies and try again

### Changes Not Reflecting
- Check browser console for errors
- Verify file permissions on `data/portfolio.json`
- Restart the development server

### TypeScript Errors
- Run `npm run type-check` to identify issues
- Ensure all dependencies are installed

### Build Errors
- Run `npm run build` to see detailed errors
- Check that all required environment variables are set

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - `ADMIN_PASSWORD`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set to your production URL)
4. Deploy!

### Other Platforms

Ensure the following for any platform:
- Node.js 18+ runtime
- Environment variables properly configured
- File write permissions for `data/portfolio.json`

## Customization

### Styling
The admin dashboard uses the Black Sun theme colors:
- Primary: `#00ffff` (cyan)
- Secondary: `#00ff00` (green)
- Background: `#080808` (black)

Modify colors in `tailwind.config.js` to customize.

### Adding Fields
To add new fields to the portfolio:

1. Update `types/portfolio.ts` with new types
2. Modify `data/portfolio.json` structure
3. Update validation in `app/api/portfolio/update/route.ts`
4. Add form fields in admin pages
5. Update portfolio display page

## Support

For issues or questions:
- Check the main README.md
- Review the code comments
- Open an issue on GitHub

## License

MIT License - see LICENSE file for details

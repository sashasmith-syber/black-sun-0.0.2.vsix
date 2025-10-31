/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Black Sun Cyberpunk Color Palette
        'bs-black': '#080808',
        'bs-cyan': '#00ffff',
        'bs-green': '#00ff00',
        'bs-yellow': '#ffcc66',
        'bs-blue': '#99ccff',
        'bs-red': '#ff0000',
        'bs-white': '#eeffff',
        'bs-gray': '#546E7A',
        'bs-dark-gray': '#263238',
        'bs-light-cyan': '#80ffff',
        'bs-dark-cyan': '#00cccc',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        code: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
        'neon-green': '0 0 10px #00ff00, 0 0 20px #00ff00',
        'neon-cyan-sm': '0 0 5px #00ffff, 0 0 10px #00ffff',
        'neon-green-sm': '0 0 5px #00ff00, 0 0 10px #00ff00',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s infinite',
        'matrix-rain': 'matrix-rain 10s linear infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': {
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
          },
          '50%': {
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
          },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

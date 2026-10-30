/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050814',
          900: '#0a0f24',
          850: '#0e1533',
          800: '#141d44',
          700: '#1e2b5e',
          600: '#2c3d82',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00f2fe',
        },
        electric: '#4facfe',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
        'cyber-grid-cyan': 'linear-gradient(to right, rgba(6, 182, 212, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.07) 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'neon-blue': '0 0 25px -5px rgba(59, 130, 246, 0.45)',
        'neon-glow': '0 0 35px 2px rgba(6, 182, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F5EFEB',
          200: '#EDE4DC',
          300: '#DFD2C4',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#FBF7F0',
          dark: '#F4ECE1',
        },
        star: {
          gold: '#F59E0B',
          amber: '#D97706',
          light: '#FDE68A',
          glow: '#FEF3C7',
        },
        azure: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          900: '#0C4A6E',
        },
        night: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        handwritten: ['"Caveat"', '"Kalam"', 'cursive'],
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(44, 33, 20, 0.08), 0 2px 6px -1px rgba(44, 33, 20, 0.04)',
        'paper-lg': '0 10px 30px -4px rgba(44, 33, 20, 0.12), 0 4px 12px -2px rgba(44, 33, 20, 0.06)',
        'gold-glow': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'card-holo': '0 15px 35px -5px rgba(2, 132, 199, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}


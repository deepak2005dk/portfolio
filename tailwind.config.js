/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0b1120',
          800: '#111a2e',
          700: '#1a2740',
          600: '#243456',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatgrid: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drawline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulsedot: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'fade-up': 'fadeup 0.7s ease-out forwards',
        'fade-in': 'fadein 0.8s ease-out forwards',
        'float-grid': 'floatgrid 8s ease-in-out infinite',
        'draw-line': 'drawline 1.2s ease-out forwards',
        'pulse-dot': 'pulsedot 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

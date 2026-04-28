/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        cream: '#faf7f4',
        blush: {
          DEFAULT: '#e8b4b8',
          light: '#f5e6e8',
          dark: '#c4848a',
        },
        'rose-deep': '#a86068',
        charcoal: '#1a1a1a',
        'gray-mid': '#6b6b6b',
        'gray-light': '#ababab',
        'gray-border': '#e5e0dc',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(26,26,26,0.06)',
        card: '0 8px 32px rgba(26,26,26,0.10)',
        deep: '0 24px 64px rgba(26,26,26,0.12)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25,0.46,0.45,0.94)',
        crisp: 'cubic-bezier(0.16, 1, 0.3, 1)',
        editorial: 'cubic-bezier(0.45, 0, 0.55, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(36px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        lineUp: {
          from: { transform: 'translateY(108%)' },
          to: { transform: 'translateY(0)' },
        },
        scaleFade: {
          from: { opacity: '0', transform: 'scale(0.93) translateY(20px)' },
          to: { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '60%': { transform: 'translateY(14px)', opacity: '0' },
          '61%': { transform: 'translateY(0)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-r': 'slideRight 0.75s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1.1s cubic-bezier(0.45, 0, 0.55, 1) both',
        'line-up': 'lineUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-fade': 'scaleFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scroll-dot': 'scrollDot 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite',
      },
    },
  },
  plugins: [],
}

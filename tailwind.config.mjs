/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0466C8',
          600: '#0353A4',
          700: '#023E7D',
          800: '#001845',
          900: '#001233',
        },
        gold: {
          100: '#F5E6C8',
          200: '#EBD29A',
          300: '#E8C872',
          400: '#D4A843',
          500: '#B88D2E',
        },
        teal: {
          100: '#B3E5E0',
          200: '#80D4CC',
          300: '#4FD1C5',
          400: '#3BC4B8',
          500: '#2EC4B6',
          600: '#26A69A',
        },
        warm: {
          50: '#FFFBF5',
          100: '#FFF5E6',
          200: '#FFE8CC',
          300: '#FFD9A8',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

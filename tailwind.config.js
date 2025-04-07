/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        senda: {
          purple: '#7C3AED',
          'purple-light': '#A855F7',
          'purple-bg': '#F5F3FF'
        }
      },
      fontFamily: {
        sans: ['GeneralSans', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
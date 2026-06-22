/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlack: '#1C1C20',
        brandDark: '#2D2E33',
        brandRed: '#CF1A22',
        brandYellow: '#F8ED48',
        brandCream: '#F3E8D6',
        brandBeige: '#E2D4B0',
        brandOrange: '#D66643',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 45px rgba(28, 28, 32, 0.12)',
        strong: '8px 8px 0 #1C1C20',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(248,237,72,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(248,237,72,.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

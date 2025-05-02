/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'], // Keep Sora + fallback
      },
      colors: {
        'navy': '#0A192F',
        'charcoal': '#1F2937',
        'steel-blue': '#4B6A88',
        'dark-gray': '#374151',
        'light-gray': '#9CA3AF',
        'off-white': '#E2E8F0',
        'accent-blue': '#63B3ED',
        'accent-orange': '#ED8936',
      },
    },
  },
  plugins: [],
}

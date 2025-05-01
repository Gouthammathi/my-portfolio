/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'], // Keep existing font
      },
      colors: {
        // New Color Palette
        'navy': '#0A192F',        // Deep navy background
        'charcoal': '#1F2937',    // Darker elements, secondary background
        'steel-blue': '#4B6A88',  // Subtle highlights or borders
        'dark-gray': '#374151',   // Cards, darker UI elements
        'light-gray': '#9CA3AF',  // Primary text color
        'off-white': '#E2E8F0',   // Lighter text, headings
        'accent-blue': '#63B3ED', // Electric blue accent
        'accent-orange': '#ED8936',// Burnt orange accent
        // Keep existing gradient colors if needed for specific highlights, or remove
        // 'primary': '#a18cd1',
        // 'secondary': '#fbc2eb',
      },
      // Add animation/keyframes if needed later for Framer Motion or CSS animations
    },
  },
  plugins: [],
}

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
        'navy': '#1A2238', // Deep navy blue
        'charcoal': '#232946', // Rich charcoal
        'steel-blue': '#406882', // Vibrant steel blue
        'dark-gray': '#393E46', // Strong dark gray
        'light-gray': '#B8C1EC', // Soft light gray
        'off-white': '#F4F4F6', // Clean off-white
        'accent-blue': '#3ABEFF', // Bright soothing blue
        'accent-orange': '#FFB86B', // Warm accent orange
        'accent-green': '#43E97B', // Fresh accent green
        'accent-purple': '#A259F7', // Modern accent purple
        'accent-pink': '#FF6F91', // Playful accent pink
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
       black: "#000000",
       charcoal: "#111111",
       gold: "#F2B900",
       soft: "#D9A928",
       ivory: "#FAF7F0",
       champagne: "#E8DDC8",
       warm: "#77736B",
      },
    },
  },

  plugins: [],
}

// Color	Hex	Best use
// Deep Charcoal	#111111	Navbar, footer, dark sections
// Rich Black	#000000	Logo, headings, strong contrast
// Luxury Gold	#F2B900	Buttons, icons, highlights
// Soft Gold	#D9A928	Hover states, borders, accents
// Warm Ivory	#FAF7F0	Main website background
// Champagne Beige	#E8DDC8	Secondary sections/cards
// Warm Gray	#77736B	Paragraphs and muted text
// White	#FFFFFF	Cards and clean backgrounds
/Users/abhisheksonwani/Documents/GitHub/dreamersite/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        notosans: ['Noto Sans', 'sans-serif'],
        rampartone: ['Rampart One', 'cursive'],
        newsreader: ['Newsreader', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        anekdevanagari: ['Anek Devanagari', 'sans-serif'],
        archivenarrow: ['Archivo Narrow', 'sans-serif'],
        khand: ['Khand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

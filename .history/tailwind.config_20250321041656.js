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
      },
    },
  },
  plugins: [],
}


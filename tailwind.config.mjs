/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      screens: {
        'xxs': '280px',
        'xs': '400px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#AE845F",
        secondary:"#222222",
        sub:"#767676"
        
      },
    },
  },
  plugins: [],
};

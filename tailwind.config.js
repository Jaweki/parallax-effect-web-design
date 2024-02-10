/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        primary: {
          white: "hsl(0, 0%, 100%)",
          black: "hsl(0, 0%, 0%)",
          "dark-gray": "hsl(0, 0%, 55%)",
          "very-dark-gray": "hsl(0, 0%, 41%)",
        },
      },
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};

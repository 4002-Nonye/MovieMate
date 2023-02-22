/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Rubik"],
      },
      colors:{
        bg:"#2a272a",
        link:"mediumaquamarine"
      }
    },
  },
  plugins: [],
};

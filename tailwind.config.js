/** @type {import('tailwindcss').Config} */

const path = require('path');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightred: "hsl(12, 88%, 59%)",
          darblue: "hsl(228, 39%, 23%)",
        },

        neutral: {
          dgrayishblue: "hsl(227, 12%, 61%)",
          vdarkblue: "hsl(233, 12%, 13%)",
          vpalered: "hsl(13, 100%, 96%)",
          vlightgray: "hsl(0, 0%, 98%)",
        }
      },

      fontFamily: {
        body: ["Work Sans"],
      },

      
      
      
    },
  },
  plugins: [],
}
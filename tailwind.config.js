/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily : {
         'arabic' : ['arabic']
      },
      colors :{
        firstbule: '#2D509F',
        secondule : '#26468E',
        trithbule : '#0F2658',
        cardswhite : '#F7F7F7',
       
      }
    },
  },
  plugins: [],
};

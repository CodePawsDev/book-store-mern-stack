/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#DB4B30',
        'secondary' : '#DC8F69', 
        'bg-color': '#F3F3F3',
        'favorite': '#DB303A',
      }, 
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Kodchasan", "serif"],
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            errorImg: "url('./src/assets/error/Backgrounds_Smile108397_2.jpg')",
            // slider img
            slider1: "url('./src/assets/slider/lobby5.jpg')",
            slider2: "url('./src/assets/slider/lobby6.jpg')",
            slider3: "url('./src/assets/slider/lobby7.jpg')",
            slider4: "url('./src/assets/slider/lobby8.jpg')",
            // slider1: "url('./src/assets/slider/lobby1.png')",
         },
         fontFamily: {
            style: ["Fira Sans", "sans-serif"],
            sc: "Ga Maamli",
         },
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "dark"],
   },
};


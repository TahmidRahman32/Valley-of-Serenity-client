/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            errorImg: "url('/src/assets/error/Backgrounds_Smile108397_2.jpg')",
            footerImg: "url('/src/assets/logo.png')",
            // slider img
            slider1: "url('/src/assets/slider/lobby5.jpg')",
            slider2: "url('/src/assets/slider/lobby6.jpg')",
            slider3: "url('/src/assets/slider/lobby7.jpg')",
            slider4: "url('/src/assets/slider/lobby8.jpg')",
            aboutLogo: "url('/src/assets/slider/lobby2.png')",
            reviewPic: "url('/src/assets/slider/reviewPic.jpg')",
            // slider1: "url('./src/assets/slider/lobby1.png')",
         },
         fontFamily: {
            style: ["Fira Sans", "sans-serif"],
            sc: "Ga Maamli",
            classic:"Wittgenstein", 
         },
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "dark"],
   },
};


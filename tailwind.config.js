/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            errorImg: "url('./src/assets/error/Backgrounds_Smile108397_2.jpg')",
         },
         fontFamily: {
            style: ["Fira Sans", "sans-serif"],
         },
      },
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "dark"],
   },
};


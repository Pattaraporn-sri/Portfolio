/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Calistoga: ["Calistoga", "serif"],
        Taviraj: ["Taviraj", "serif"],
        TrainOne: ["Train One", "serif"],
        Kanit: ["Kanit", "serif"],
        DM: ["DM Serif Text", "serif"],
      },
      scrollBehavior: ["smooth"],
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    animate: {
      "fade-in": "fadeIn 1s ease-in-out",
    },
  },
  plugins: [],
};

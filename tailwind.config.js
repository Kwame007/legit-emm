/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monserat: ["Montserrat", "sans-serif"],
        muly: ["Mulish", " sans-serif"],
      },
      colors: {
        "gray-800": "#30475E",
        bright: "#F05454",
      },
      backgroundColor: {
        "hero-bg": "#f3f6fe",
        bright: "#F05454",
        "gray-800": "#30475E",
        fade: "rgba(243,246,254,0.9)",
      },
      borderRadius: {
        "hero-r": "15rem",
        "hero-l": "15rem",
      },
      height: {
        "hero-h": "700px",
        "hero-hm": "800px",
      },
    },
  },
  plugins: [],
};

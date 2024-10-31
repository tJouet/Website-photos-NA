import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      zIndex: {
        "100": "100",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/picHero.jpg')",
      },
      colors: {
        backgroundGrey: "#1D1D1D",
      },
      fontFamily: {
        Oxanium: ["Oxanium", "sans-serif"],
        Orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        "slide-in-left": "slideInLeft 1s ease forwards",
        "open-on-select-1": "openOnSelect1 1s ease forwards",
        "open-on-select-2": "openOnSelect2 1s ease forwards",
        "close-on-leave-1": "closeOnLeave1 0.5s ease forwards",
        "close-on-leave-2": "closeOnLeave2 0.5s ease forwards",
      },
      keyframes: {
        openOnSelect1: {
          "0%": { transform: "translateX(0%) translateY(0%)" },
          "100%": { transform: "translateX(1%)  translateY(1%)" },
        },
        openOnSelect2: {
          "0%": { transform: "translateX(0%) translateY(0%)" },
          "100%": { transform: "translateX(2%)  translateY(2%)" },
        },
        closeOnLeave1: {
          "0%": { transform: "translateX(1%) translateY(1%)" },
          "100%": { transform: "translateX(0%)  translateY(0%)" },
        },
        closeOnLeave2: {
          "0%": { transform: "translateX(2%) translateY(2%)" },
          "100%": { transform: "translateX(0%)  translateY(0%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(20%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const newComponents = {
        ".sliders": {
          color: "#008000",
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff00ff",
        },
      };
      addComponents(newComponents);
    },
  ],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        huella: {
          50: "#e6f6f8",
          100: "#b3e8ec",
          200: "#80dae0",
          300: "#4dccd4",
          400: "#1abec8",
          500: "#009aa8",
          600: "#00808c",
          700: "#006670",
          800: "#004c54",
          900: "#003238",
          950: "#00191d",
        },
        accent: {
          50: "#fff8e6",
          100: "#ffecb8",
          200: "#ffe08a",
          300: "#ffd45c",
          400: "#ffb81a",
          500: "#ffaa04",
          600: "#cc8803",
          700: "#996602",
          800: "#664401",
          900: "#332201",
          950: "#1a1100",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "moving-border": "moving-border 4s linear infinite",
        "text-generate": "text-generate 0.3s ease forwards",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        "moving-border": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "text-generate": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eden: "#114c5f",
        sinbad: "#9cd2d3",
        janna: "#f2e6cf",
        bondi: "#0799b6",
        marino: "#4a6eb0",
      },
    },
  },
  plugins: [],
};

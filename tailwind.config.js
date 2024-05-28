/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eden: "#114c5f",
        sinbad: "#9cd2d3",
        janna: "#f2e6cf",
      },
    },
  },
  plugins: [],
};

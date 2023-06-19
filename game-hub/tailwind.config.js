/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1e1e1e",
        "custom-light-black": "#3c3c3c",
      },
    },
  },
  plugins: [],
};

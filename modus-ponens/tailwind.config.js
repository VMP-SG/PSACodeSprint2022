/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-0": "#002E4B",
        "light-blue-0": "#F1F6FA",
        "blue-link": "#185CFF",
      },
      fontSize: {
        title: "2.875rem",
        subtitle: "1rem",
        "card-header": "2.375rem",
        "card-body": "1.875rem",
      },
      fontFamily: {
        primary: ["Manrope", "Helvetica", "Arial"],
      },
    },
  },
  plugins: [],
};

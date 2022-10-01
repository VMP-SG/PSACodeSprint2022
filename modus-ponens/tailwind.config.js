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
        "light-blue-1": "#F0F9FF",
        "blue-link": "#185CFF",
        "dark-blue-main": "#1A2A48",
        "grey-main": "#9597A0",
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

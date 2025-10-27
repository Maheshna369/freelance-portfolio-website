/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "dark",
    "dark:bg-gray-900",
    "dark:bg-gray-900/70",
    "dark:bg-gray-800",
    "dark:text-gray-200",
    "dark:hover:text-blue-400",
    "animate-fadeIn",
    "z-[9999]",
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // for app router
    "./pages/**/*.{js,ts,jsx,tsx}", // for pages router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // enable manual dark/light toggle
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
    "bg-gray-900",
    "bg-gray-800",
    "text-gray-200",
    "hover:text-blue-600",
    "dark:hover:text-blue-400",
    "animate-fadeIn",
    "z-[9999]",
  ],
};

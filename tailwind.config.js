/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Include all React files
  ],
  theme: {
    extend: {}, // Optional: Extend Tailwind's default theme
  },
  plugins: [], // Optional: Add plugins if needed
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eyesbg': "url('/assets/eyes-bg.jpg')",
      }
    },
  },
  plugins: [],
}


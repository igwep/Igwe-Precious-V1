/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#42446E', 
        mainColor: '#00C0FD' // Add your color here
      },
    },
  },
  plugins: [],
}


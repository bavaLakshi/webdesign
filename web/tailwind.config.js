// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      padding: {
        '48': '12rem', // Define padding value if it's missing
      }
    },
  },
  plugins: [],
}



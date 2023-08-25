/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        darkPurple: "#22162B",
        purple: "#451F55",
        lightPurple: "#724E91",
        darkBlue: "#18314F",
        blue: "#384E77",
        lightBlue: "#A8B0BE"
      }
    },
  },
  plugins: [],
}

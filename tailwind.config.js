/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb,rb,slim}",
    "./frontend/javascript/**/*.js",
    "./frontend/javascript/**/*.vue",
    "./frontend/javascript/**/*.svelte",
    "./frontend/javascript/**/*.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js}","./index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


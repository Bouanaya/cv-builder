/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js}","./index.html", "./pages/create.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


/** @type {import('tailwindcss').Config} */
// 'module.exports =' 부분을 아래와 같이 'export default'로 변경
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
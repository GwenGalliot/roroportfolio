/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.{antlers.html,html,js,vue}',
    './content/**/*.md',     // if you reference classes in Bard/Markdown
  ],
  theme: { extend: {} },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          950: '#050b18',
          900: '#0a1428',
          800: '#0f1c34',
          700: '#152540',
        },
        accent: {
          DEFAULT: '#2f7bf6',
          light: '#5b9bff',
          dark: '#1e5fd6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        card: 'rgba(255, 255, 255, 0.05)',
        'card-border': 'rgba(255, 255, 255, 0.1)',
        primary: '#6d28d9', // Deep purple accent
        'primary-glow': 'rgba(109, 40, 217, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

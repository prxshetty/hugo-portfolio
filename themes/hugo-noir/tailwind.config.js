/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'bg-primary-light': colors.white,
        'text-primary-light': colors.neutral[800],
        'text-secondary-light': colors.neutral[600],
        'border-primary-light': colors.neutral[300],
        'accent-light': colors.sky[600],

        'bg-primary-dark': colors.black,
        'bg-secondary-dark': colors.neutral[950], // For cards and main content sections
        'bg-tertiary-dark': colors.neutral[900],  // For smaller elements like icon backgrounds
        'text-primary-dark': colors.neutral[100],
        'text-secondary-dark': colors.neutral[400],
        'border-primary-dark': colors.neutral[700],
        'accent-dark': colors.sky[500],
      },
    },
  },
  plugins: [],
} 
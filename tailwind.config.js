/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1B262C',
        'secondaryColor': '#BBE1FA',
        'thirdColor': '#0F4C75',
      }
    },
  },
  darkMode: 'class',
}


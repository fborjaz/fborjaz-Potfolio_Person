/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],

  // make sure to safelist these classes when using purge
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
    'dark',
    'light',
    'bg-light-background',
    'bg-dark-background',
    'text-light-text',
    'text-dark-text',
  ],

  // enable dark mode via class strategy
  darkMode: 'className',

  theme: {
    extend: {},
    themes: {
      light: {
        colors: {
          primary: '#3498db',
          secondary: '#f1c40f',
          background: '#f9f9f9',
          text: '#333',
        },
      },
      dark: {
        colors: {
          primary: '#2ecc71',
          secondary: '#e74c3c',
          background: '#333',
          text: '#fff',
        },
      },
    },
  },

  plugins: [
    // include Flowbite as a plugin in your Tailwind CSS project
    require('flowbite/plugin')
  ],
}
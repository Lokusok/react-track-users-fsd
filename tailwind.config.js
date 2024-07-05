/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-color-1': '#141414',
      },
      spacing: {
        7.5: '1.8rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

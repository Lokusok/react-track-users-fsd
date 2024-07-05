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
      animation: {
        'skeleton-slide': 'skeleton-slide 1.7s linear forwards infinite',
      },
      keyframes: {
        'skeleton-slide': {
          '0%': {
            translate: '0 0',
          },
          '60%': {
            translate: '100% 100%',
          },
          '100%': {
            translate: '100% 100%',
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

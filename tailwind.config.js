module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      teal: '#C5E4E8',
    }),
    fontFamily: {
      space: ['Space Mono', 'monospace'],
    },
    extend: {
      spacing: {
        34: '8.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

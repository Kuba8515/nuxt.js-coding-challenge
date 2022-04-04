module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cyan: '#0fb1af',
        themeBackground: 'var(--background)',
        themeText: 'var(--text)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

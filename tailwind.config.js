module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './**/*.html',
    '!./node_modules'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D1B2A',
        gold: '#C1B482',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1312px',
      },
      height: {
        hero: '110vh',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
}

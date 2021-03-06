module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      red: '#770C0C',
      orange: '#7F2919',
      golden: '#825A2C',
      darkVeraman: '#0C4C3B',
      mustard: '#C87F0E',
      softBlack: '#1f1f1f',
      white: '#fafafa',
    },
    extend: {
      boxShadow: {
        redGlow: '2px 5px 5px 1px rgba(133, 12, 12, 0.5)',
        yellowGlow: '2px 5px 5px 1px rgba(201, 128, 14, 0.5)',
        greenGlow: '2px 5px 5px 1px rgba(11, 76, 59, 0.5)',
      },
    },
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
    mono: ['Inconsolata', 'monospace'],
  },
  plugins: [],
};

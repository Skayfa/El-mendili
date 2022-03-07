module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner-logo': "url('/src/assets/banner.jpg')",
       }),
    },
    colors: {
      or: '#936b47',
      black: '#000',
      white: '#FFF',
      transparent: 'transparent',
      green: "#34D399",
      blue: '#60A5FA',
      yellow: "#FBBF24",
      red:'#F87171'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

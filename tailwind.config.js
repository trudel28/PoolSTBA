module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "sidney-crosby": "url('https://cms.nhl.bamgrid.com/images/photos/311199062/1024x576/cut.jpg')"
      }),
      colors: {
        "light-gray": "#e9ecef",
        "icons-color": "#949db2",
        "primary_blue": "#1b97f5",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

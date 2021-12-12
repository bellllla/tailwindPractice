module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx},"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

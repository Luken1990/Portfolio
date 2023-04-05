/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e9ecef',
        accent: '#007390',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200x',
      xl: '1700x',
    },
    // backgroundImage: {
    //   develop: 'url("./src/assets/images/develop-bg.jpg")',
    //   design: 'url("./src/assets/images/design-bg.jpg")',
    // },
  },
  plugins: [],
};

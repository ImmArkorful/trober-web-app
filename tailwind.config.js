/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1A37',
        white: '#FFF',
        icongrey: '#8890A1',
        gradientstart: '#1B3076',
        gradientend: '#2B2DA9',
        bordergray: '#979797',
        pagebg: '#EDF5F4',
        underlinecolor: '#8CCE10',
        textblue: '#173990',
        featuresheader: '#3F3F3E',
        featuresdescription: '#727372',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
      },
      backgroundImage: {
        'businesswoman-image':
          "url('/images/businesswoman-riding-bus-work.jpg')",
        'businesswoman-mobile-bg': "url('/images/mobile-contactUs-bg.jpg')",
        'businesswoman-large-bg': "url('/images/business-woman-largeSC.jpg')",
      },
    },
  },
  plugins: [],
};

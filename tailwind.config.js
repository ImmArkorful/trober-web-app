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
        'businessMan-large': "url('/images/businessMan-lg.jpg')",
        'businessMan-small': "url('/images/businessMan-sm.jpg')",
        'school-lg': "url('/images/school-large.jpg')",
        'school-sm': "url('/images/school-sm.jpg')",
        'events-lg': "url('/images/events-lg.jpg')",
        'events-sm': "url('/images/events-sm.jpg')",
        'church-lg': "url('/images/church-lg.jpg')",
        'church-sm': "url('/images/church-sm.jpg')",
        'bus-owners-lg': "url('/images/bus-owners-lg.jpg')",
        'bus-owners-sm': "url('/images/bus-owners-sm.jpg')",
        'fleet-managers-lg': "url('/images/fleet-managers-lg.jpg')",
        'fleet-managers-sm': "url('/images/fleet-managers-sm.jpg')",
        'investors-lg': "url('/images/investors-lg.jpg')",
        'investors-sm': "url('/images/investors-sm.jpg')",
      },
    },
  },
  plugins: [],
};

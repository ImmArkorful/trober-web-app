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
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673280717/Web%20app%20assets/Web/business-woman-largeSC_mywuev.jpg')",
        'businesswoman-mobile-bg':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673280717/Web%20app%20assets/Web/businesswoman-riding-bus-work_ukx7ol.jpg')",
        'businessMan-large':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281546/Web%20app%20assets/Web/businessMan-lg_sfljv1.jpg')",
        'businessMan-small':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281542/Web%20app%20assets/Web/businessMan-sm_eek9rd.jpg')",
        'school-lg':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281546/Web%20app%20assets/Web/school-large_tzwpvb.jpg')",
        'school-sm':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281546/Web%20app%20assets/Web/school-sm_c7ucwo.jpg')",
        'events-lg':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281544/Web%20app%20assets/Web/events-lg_gisbsp.jpg')",
        'events-sm':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281544/Web%20app%20assets/Web/events-sm_rjpmaj.jpg')",
        'church-lg':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281544/Web%20app%20assets/Web/church-lg_cu0hbc.jpg')",
        'church-sm':
          "url('https://res.cloudinary.com/troberapp-com/image/upload/v1673281543/Web%20app%20assets/Web/church-sm_iocodu.jpg')",
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

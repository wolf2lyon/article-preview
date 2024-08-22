/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'mobile':'100px',
        'desktop':'1440px',
        'mobile-rotate': { 'raw': '(max-height: 553px)' },
      },
      colors:{
        primary:'hsl(214, 17%, 51%)',
        primary_dark:'hsl(217, 19%, 35%)',
        primary_light:'hsl(212, 23%, 69%)',
        secondary: 'hsl(210, 46%, 95%)',
        white: 'hsl(0,0%,100%)',
        
      }
    },
    
  },
  plugins: [],
}
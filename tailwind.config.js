/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`index.html`],
  theme: {
    container: {
      center: true,
      padding : '16px',
    },
    extend: {
      colors: {
        primary: '#1e293b',//warna text utama catatan
        font: '#0284c7',//warna text nama besar
        bgPrimary: '#0d9488', //background color
        brmprimary: '#64748b', //text pudar
        ftrPrimary: '#020617' //background color fotter
      },
      screens : {
        'xl' : '1280',
        '2xl' : '1320px',

      },      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1198px',
        xl: '1198px',
        '2xl': '1198px',
      }
    },
    fontSize: {
      xs: ['0.75rem', '16px '], // 12px
      sm: ['0.875rem', '22px'], // 14px
      base: ['1rem', '26px'], // 16px
      lg: ['1.125rem', '32px'], // 18px
      xl: ['1.25rem', '24px'], // 20px
      '2xl': ['1.5rem', '32px'], // 24px
      '3xl': ['1.75rem', '40px'], // 28px
      '4xl': ['2.5rem', '54px'], // 40px
      '5xl': ['3rem', '64px'], // 48px
      '6xl': ['4.5rem', '89px'], // 72px
    },
    extend: {
      fontFamily: {
        plujakartasans: ['PlusJakartaSans', 'sans-serif'],
      },
      colors: {
        'new-gray-lighter': '#F4F5F7',
        'new-gray-light-1': '#EEEFF4',
        'new-gray-light-2': '#D9DBE1',
        'new-gray': '#969BAB',
        'new-gray-dark': '#474A57',
        'new-gray-darker': '#18191F',
        'new-blue-lighter': '#D9E3FC',
        'new-blue-light': '#789DFC',
        'new-blue': '#4475F2',
        'new-blue-dark': '#4F7DF3',
        'new-blue-darker': '#4737FF',
        'new-pink-light': '#E1DFF6',
        'new-pink': '#BCB6FD',
        'new-blue-lighter-2': '#CFD9F5',
        'new-blue-light-2': '#A6BBF2',
        'new-blue-light-3': '#E5EDFF',
        'new-yellow': '#EFE0B4',
        'new-black': '#181E4B',
        'new-black-1': '#14183E',
        'new-gray-different': '#5E6282',
        'new-gray-different-1': '#686D77',
      },
      width: {
        '50': 'calc(50% - 15px)',
        '33': 'calc(33.3333% - 20px)',
        '25': 'calc(25% - 24px)',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '15': 'repeat(auto-fit,minmax(14rem,1fr))',
        '20': 'repeat(auto-fit,minmax(20rem,1fr))',
        '30': 'repeat(auto-fit,minmax(30rem,1fr))',
        '40': 'repeat(auto-fit,minmax(40rem,1fr))',
        'max-auto-1': 'repeat(auto-fit,minmax(10rem,max-content))',
        'max-auto-2': 'repeat(auto-fit,minmax(15rem,max-content))',
        'max-auto-3': 'repeat(auto-fit,minmax(20rem,max-content))',
        'max-auto-4': 'repeat(auto-fit,minmax(25rem,max-content))',
        'max-auto-5': 'repeat(auto-fit,minmax(30rem,max-content))',
        'max-auto-6': 'repeat(auto-fit,minmax(35rem,max-content))',
        'max-auto-7': 'repeat(auto-fit,minmax(40rem,max-content))',
        'max-1': 'repeat(1,minmax(0,max-content))',
        'max-2': 'repeat(2,minmax(0,max-content))',
        'max-3': 'repeat(3,minmax(0,max-content))',
        'max-4': 'repeat(4,minmax(0,max-content))',
        'max-5': 'repeat(5,minmax(0,max-content))',
        'max-6': 'repeat(6,minmax(0,max-content))',
        'max-7': 'repeat(7,minmax(0,max-content))',
        'max-8': 'repeat(8,minmax(0,max-content))',
        'max-9': 'repeat(9,minmax(0,max-content))',
        'max-10': 'repeat(10,minmax(0,max-content))',
        'max-11': 'repeat(11,minmax(0,max-content))',
        'max-12': 'repeat(12,minmax(0,max-content))',
      }
    },
  },
  plugins: [
    //require('@tailwindcss/forms'),
    /*require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      //strategy: 'class', // only generate classes
    }),*/
  ],
}

//font-thin	100;
//font-extralight	200;
//font-light 300;
//font-normal	400;
//font-medium	500;
//font-semibold	600;
//font-bold	700;
//font-extrabold 800;
//font-black 900
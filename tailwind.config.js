/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'bgColor': 'var(--bgColor)',
        'primaryColor': 'var(--primaryColor)',
        'secondaryColor': 'var(--secondaryColor)',
        'textColor': 'var(--textColor)',
      },
      animation: {
        err: 'err 1s infinite alternate'
      },
      keyframes: {
        err: {
          '100%': { opacity: '20%' }
        }
      }
    },
  },
  plugins: [],
}


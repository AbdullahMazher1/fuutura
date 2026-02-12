/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: [
          'Futura',
          'Futura PT',
          'Futura-Medium',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ],
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
      keyframes: {
        'border-spin': {
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      colors: {
        'kyc-bg': '#050608',
        'kyc-blue': '#10b9ff',
        'kyc-gray': '#a4aab3',
      },
    },
  },
  plugins: [],
}
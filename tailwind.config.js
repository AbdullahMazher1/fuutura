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
        futura: ['Futura', 'system-ui', 'sans-serif'],
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
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #15181D 0%, #FC00FF 21%, #00DBDE 78%, #15181D 95%)',
      },
    },
    fontFamily: {
      
      'OS': ["Open Sans", 'serif'],
      'pop': ["Poppins",'serif'],
      'Inter': ["Inter",'serif']
    }
  },
  plugins: [],
}
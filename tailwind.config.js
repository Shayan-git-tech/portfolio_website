module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode : "class",
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle 90em at 50% 5%, rgba(17,17,17,0.5) 0%, rgba(209,213,219,1) 50%, rgba(243,244,246,1) 100%)',
        'custom-radial-dark': 'radial-gradient(circle 90em at 50% 5%, rgba(17,17,17,0.9) 0%, rgba(17,17,17,1) 50%, rgba(17,17,17,1) 400%)',
        'black-noise': "url('./Images/black-noise.png')",
      },
      colors: {
        'custom-gray-dark': '#111',
        'custom-gray-light': '#f3f4f6',
        'custom-gray-neutral': '#d1d5db',
      },
      backgroundPosition: {
        'custom-10-20': '10% 20%',
        'custom-25-75': '25% 75%',
        'top-center': 'top center', // Added custom top-center position
      },
      fontFamily: {
        'sans': ['Matter', 'sans-serif'],
        'matter': ['Matter', 'sans-serif'],
        'instrument': ["Instrument Serif", "serif"],
      },
      
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

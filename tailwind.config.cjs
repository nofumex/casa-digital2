/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        softBlueGray: '#A8B4C2',
        paleTeal: '#B2D8D8',
        warmBeige: '#E0D7C7',
        softLavender: '#E6E6FA'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        fluid: '3rem'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        ripple: {
          '0%': { boxShadow: '0 0 0 0 rgba(178, 216, 216, 0.7)' },
          '70%': { boxShadow: '0 0 0 12px rgba(178, 216, 216, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(178, 216, 216, 0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        ripple: 'ripple 1.6s ease-out infinite'
      }
    }
  },
  plugins: []
};













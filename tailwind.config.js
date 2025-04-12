/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0078FF', // Electric blue
          dark: '#0060CF',
          light: '#3D9DFF',
        },
        secondary: {
          DEFAULT: '#00D1FF', // Cyan
        },
        background: {
          DEFAULT: '#0A1128', // Deep navy
          dark: '#050A17',
        },
        accent: {
          DEFAULT: '#F0F4F8', // Clean white
          silver: '#B3C5D6', // Soft silver
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

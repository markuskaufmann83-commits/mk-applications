/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e2ee',
          200: '#b3c5dd',
          300: '#8da8cc',
          400: '#4a72a8',
          500: '#1b4d89',
          600: '#133e72',
          700: '#0f3460', // Primary Brand Deep Navy
          800: '#0b2545',
          900: '#07182d',
          950: '#030c17',
        },
        cyan: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Accent Teal / Mint
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        electric: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Accent Tech Cyan / Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(15, 52, 96, 0.08) 1px, transparent 1px)",
        'grid-pattern-dark': "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(14, 165, 233, 0.3)',
        'glow-navy': '0 0 30px -5px rgba(15, 52, 96, 0.25)',
      },
    },
  },
  plugins: [],
}

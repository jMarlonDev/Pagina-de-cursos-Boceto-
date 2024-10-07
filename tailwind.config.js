/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        swing: 'swing 0.8s ease-in-out',
      },
      keyframes: {
        swing: {
          '20%': { transform: 'rotate3d(0, 0, 1, 15deg)' },
          '40%': { transform: 'rotate3d(0, 0, 1, -10deg)' },
          '60%': { transform: 'rotate3d(0, 0, 1, 5deg)' },
          '80%': { transform: 'rotate3d(0, 0, 1, -5deg)' },
          '100%': { transform: 'rotate3d(0, 0, 1, 0deg)' },
        },
      },

      colors: {
        custom: "rgb(50, 50, 50)",
      }
    },
    plugins: [],
  }
}

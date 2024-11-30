/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
        Rubik: ["Rubik","sans-serif"],
        Ranga: ["Ranga","sans-serif"],
      },
      width: {
        'fluid-image':'clamp(12.5rem, 8.333333333333332rem + 20.833333333333336vw, 25rem)',
        'fluid-image-small':'clamp(12.5rem, 9.375rem + 15.625vw, 21.875rem)',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}


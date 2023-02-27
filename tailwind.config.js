/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        card: "url('/src/assets/icons/card.svg')",
      },
      colors: {
        bg: "#14172B",
        text: "#737BAE",
        green: {
          secondary: "#00FFA3",
        },
        red: {
          secondary: "#FF4D4D",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1600px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};

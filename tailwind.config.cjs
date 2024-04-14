/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.{html,md,mdx,tsx,js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: "JetBrains Mono, monospace",
        geist: "Geist mono, monospace",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white-44": "rgba(255, 255, 255, 0.44)",
        "fg-primary": "#efebf5",
        success: {
          lite: "#85ffd3",
          primary: "#00ffa3",
          dark: "#00cc83",
        },
        alert: {
          lite: "#ffe08f",
          primary: "#ffc531",
          dark: "#cc9e27",
        },
        error: {
          lite: "#eb6c73",
          med: "#f5454e",
          dark: "#b80711",
        },
        grey: {
          "elevation-5": "#222d3d",
          "elevation-4": "#1d212e",
          "elevation-3": "#171e29",
          "elevation-2": "#131821",
          "elevation-1": "#0f1319",
          default: "#0c0f14",
          logo: "#FFFFFF0A",
          caret: "#1E2633",
        },
        teal: {
          primary: "#62eded",
          "primary-2": "#449fa1",
          "primary-3": "#2a595d",
          connect: "#00CECE",
        },
      },
    },
  },
  plugins: [],
};

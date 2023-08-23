import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      orange: {
        50: "#FF5500",
      },
      dark: {
        30: "#514B48",
        20: "#363230",
        15: "#292524",
        10: "#1B1918",
      },
      light: {
        95: "#F2F2F2",
        90: "#E6E6E6",
        85: "#D9D9D9",
        80: "#CCCCCC",
        60: "#999999",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        general: ["var(--font-general-sans)"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
  paths: {
    "@/*": ["./src/*"],
  },
};
export default config;

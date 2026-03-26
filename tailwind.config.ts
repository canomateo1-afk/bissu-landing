import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#231F20",
          gold: "#B4975A",
          white: "#FFFFFF",
          dark: "#1a1a1a",
          gray: "#2a2a2a",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        body: ["system-ui", "Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

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
        // Brand-official palette (Manual de Uso): black #231F20, white, gold #B4975A
        // Light theme: white surfaces, brand-black text, gold accent.
        ink: {
          900: "#FFFFFF", // page bg
          800: "#FAF8F3", // alternating cream section (warm paper)
          700: "#F2EEE3",
          600: "#EAE3D2",
          500: "#D9D0BB",
        },
        bone: {
          50: "#231F20", // primary text — brand BLACK from manual
          100: "#1A1718",
          200: "#100E0F",
          300: "#5A5253", // muted secondary text
          400: "#8A8082",
        },
        gold: {
          100: "#E9D7A7",
          200: "#D4B97A",
          300: "#C2A368",
          400: "#B4975A", // brand gold (manual oficial)
          500: "#9A7E45",
          600: "#7C6435",
        },
        brand: {
          black: "#231F20",
          gold: "#B4975A",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Libre Baskerville", "Baskerville", "serif"],
      },
      letterSpacing: {
        tightest: "-0.025em",
        tightestest: "-0.04em",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        "marquee-slow": "marquee 110s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

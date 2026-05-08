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
          900: "#FBF8F1", // page bg — warm paper cream
          800: "#EDE5D2", // alternating cream section (perceptibly deeper)
          700: "#E0D4B7",
          600: "#CFC09C",
          500: "#B7A57F",
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
        "drift-slow": "drift 7s ease-in-out infinite",
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
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
        elegant: "cubic-bezier(0.65, 0, 0.35, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

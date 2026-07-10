import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm White canvas
        canvas: "#FAF8F4",
        // Charcoal ink
        ink: "#1C1C1C",
        // Accents — natural, muted, no bright colors
        stone: "#C9C1B4",
        beige: "#E7E0D4",
        sand: "#D8CFBF",
        bronze: "#9A7B4F",
        olive: "#6E6B54",
        mist: "#F1EDE6",
        line: "#E3DDD1",
      },
      fontFamily: {
        // Editorial display serif + modern sans (wired up via next/font)
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid, magazine-scale display sizes
        "display-sm": ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display": ["clamp(3rem, 9vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(3.5rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        label: "0.28em",
        wide: "0.16em",
      },
      maxWidth: {
        editorial: "78rem",
        prose: "42rem",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "800": "800ms",
        "1200": "1200ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) forwards",
        kenburns: "kenburns 14s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

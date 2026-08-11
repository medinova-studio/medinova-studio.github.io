import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#010102",
        surface: {
          1: "#0f1011",
          2: "#141516",
          3: "#18191a",
          4: "#191a1b",
        },
        hairline: {
          DEFAULT: "#23252a",
          strong: "#34343a",
          tertiary: "#3e3e44",
        },
        primary: {
          DEFAULT: "#5e6ad2",
          hover: "#828fff",
          focus: "#5e69d1",
        },
        ink: {
          DEFAULT: "#f7f8f8",
          muted: "#d0d6e0",
          subtle: "#8a8f98",
          tertiary: "#62666d",
          950: "#070a12",
          900: "#0b1018",
          800: "#121a26",
          700: "#1b2738",
          600: "#2a3a52",
        },
        success: "#27a644",
        cyan: {
          DEFAULT: "#22d3ee",
          glow: "#0891b2",
        },
        violet: {
          DEFAULT: "#8b5cf6",
          glow: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 5s ease infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34,211,238,0.12)" },
          "50%": { boxShadow: "0 0 40px rgba(34,211,238,0.28)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [forms, typography],
};

export default config;

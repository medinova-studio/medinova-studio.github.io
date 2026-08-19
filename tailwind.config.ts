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
        canvas: "#F0F5FF",
        surface: {
          1: "#FFFFFF",
          2: "#EAF0FB",
          3: "#E1E9F7",
          4: "#D9E4F4",
        },
        hairline: {
          DEFAULT: "#DCE4F2",
          strong: "#C6D2E9",
          tertiary: "#B3C1DD",
        },
        primary: {
          DEFAULT: "#2455E6",
          hover: "#1D46C6",
          focus: "#1634A8",
          soft: "#E8EEFF",
        },
        accent: {
          DEFAULT: "#FFD749",
          ink: "#7A5C00",
          soft: "#FFF3C4",
        },
        ink: {
          DEFAULT: "#14151A",
          muted: "#3E4049",
          subtle: "#6B6F7A",
          tertiary: "#9CA0A8",
          950: "#0B0F1A",
          900: "#101A33",
          800: "#16223F",
          700: "#1D2C4F",
          600: "#27365C",
        },
        success: "#27a644",
        whatsapp: {
          DEFAULT: "#25d366",
          hover: "#1fb458",
          deep: "#128c7e",
          text: "#0E7A46",
          border: "#B5E3C9",
        },
        navy: {
          DEFAULT: "#101A33",
          1: "#16223F",
          2: "#27365C",
        },
        cyan: {
          DEFAULT: "#22d3ee",
          glow: "#0891b2",
        },
        blue: {
          DEFAULT: "#0050A0",
          glow: "#2455E6",
          sky: "#00A0F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0",
        xs: "6px",
        sm: "8px",
        md: "11px",
        lg: "14px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        pill: "9999px",
        full: "9999px",
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
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          red: "#B94A42",
          redDark: "#9A3A33",
          ink: "#1A1A1A",
          paper: "#F8F5F0",
          steel: "#3A3A3A",
          stone: "#6B6660",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

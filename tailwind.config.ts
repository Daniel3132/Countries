import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // opcional: atajos para los originales
        darkElement: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
        lightText: "hsl(200, 15%, 8%)",
        lightInput: "hsl(0, 0%, 52%)",
        lightBg: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // This enables dark mode based on a class, so use the class 'dark' to enable dark mode.
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Look for content in these files.
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(266 100% 70%)", // A purple color for primary
        background: "hsl(248 18% 10%)", // Dark background color
        foreground: "hsl(0 0% 100%)", // White for foreground
      },
    },
  },
  plugins: [],
};

export default config;

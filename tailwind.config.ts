import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#071C2C",
          800: "#0B2A40",
          700: "#123B57"
        },
        tealbrand: {
          700: "#0B7C7A",
          600: "#0E8E8A",
          500: "#15A6A0"
        }
      }
    }
  },
  plugins: []
};

export default config;
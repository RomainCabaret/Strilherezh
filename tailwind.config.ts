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
        // strilherezh
        white: "#ffffff",
        gold: {
          DEFAULT: "#E0AA3E",
        },
        lightgold: {
          DEFAULT: "#f5ca5b",
        },
        //Skornenn
        blue: {
          DEFAULT: "#003D75",
        },
        cyan: {
          DEFAULT: "#33CEF1",
        },
        // TEXT
        black: {
          DEFAULT: "#505050",
        },
        gray: {
          DEFAULT: "#AAAAAA",
        },
        lightgray: {
          DEFAULT: "#E3E3E3",
        },
      },
      borderRadius: {
        DEFAULT: "2px",
        full: "9999px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

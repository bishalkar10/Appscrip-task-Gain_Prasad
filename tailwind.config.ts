import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        "270": "270deg",
      },
      colors: {
        primary: "#252020",
      },
      fontFamily: {
        Simplon: ["Simplon", "sans-serif"], // Replace with your font's name
      },
    },
  },
  plugins: [],
};
export default config;

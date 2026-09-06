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
        elfadh: {
          red: "#E50914",
        },
        madani: {
          blue: "#00A3E0",
          orange: "#FF8C00",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#03ac0e",
        "secondary-white": "#ffffff",
        "light-green": "#f0fff4",
      },
    },
  },
  plugins: [daisyui, require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;

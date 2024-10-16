import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation:{
        'bounce-sm': 'bounce-sm 1s infinite', 
      },
      keyframes:{
        'bounce-sm':{
          '0%,100%':{
            transform:'translateY(-5%)',
            AnimationTimingFunction:'cubic-bezier(.17,.67,.83,.67)',
          },
          '50%':{
            transform:'translateY(0)',
            AnimationTimingFunction:'cubic-bezier(.17,.67,.83,.67)',
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;

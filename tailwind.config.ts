import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: '356px',
      md: '640px',
      lg: '768px',
      xl: '900px',
    },
    extend: {
      colors: {
        primary: '#FF7900',
        secondary: '#72777A',
        accent:{
          default: '#000000',
          des: '#5A5D5A',
          hover: '#74767A'
        }
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
         secondary: "#153f65",
         darkBg: "#131424" 
      },
      backgroundImage: {
        "gradient-cover":
        "linear-gradient(90, 21deg. rgba(21, 63, 101, 0.8))-5.91%, rgba(21, 63, 101, 0.2)111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;

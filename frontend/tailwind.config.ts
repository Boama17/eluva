import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'Grain': "url('/img/grain.jpeg')"
      },
      fontFamily: {
        'theme': ['Arizonia'],
        spartan: ['"League Spartan"', 'sans-serif'],
        'pop': ['Raleway'],
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note: Next.js 15 uses 'app' at the root usually
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Keeping this just in case you move files later
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4332', // Forest Green
        secondary: '#95D5B2', // Sage
        accent: '#E9C46A', // Pale Gold
        paper: '#F8F9FA', // Off-white background
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-oswald)'],
      },
    },
  },
  plugins: [],
};
export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'xs': ['12px', {lineHeight: '16px'}],
      'sm': ['14px', {lineHeight: '20px'}],
      'base': ['16px', {lineHeight: '20px'}],
      'lg': ['18px', {lineHeight: '24px'}],
      'xl': ['24px', {lineHeight: '32px'}],
      '2xl': ['32px', {lineHeight: '48px'}],
      '3xl': ['40px', {lineHeight: '60px'}],
      '4xl': ['48px', {lineHeight: '72px'}],
      '5xl': ['64px', {lineHeight: '92px'}],
      '6xl': ['96px', {lineHeight: '116px'}],
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
};
export default config;

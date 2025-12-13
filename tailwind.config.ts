import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cod-gray': '#0F0F0F',
        'cod-gray-dark': '#0E0E0E',
        'trout': '#4B4B57',
        'celery': '#9ECE58',
        'spray': '#93E4F1',
        'athens-gray': '#E5E7EB',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

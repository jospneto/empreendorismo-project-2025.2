import type { Config } from 'tailwindcss';

const tailwindConfig = {
  darkMode: ['class', 'dark'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--catolica-blue)',
          light: 'var(--catolica-light-blue)'
        }
      }
    }
  }
} satisfies Config;

export default tailwindConfig;
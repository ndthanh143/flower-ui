import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      sm: '1.2rem',
      base: '1.4rem',
      lg: '1.8rem',
      xl: '2.2rem',
      '2xl': '2.6rem',
      '3xl': '3rem',
      '4xl': '3.4rem',
      '5xl': '3.8rem',
    },
    keyframes: {
      'fade-in': { '0%': { transform: 'opacity(0)' }, '100%': { transform: 'opacity(100)' } },
    },
    animation: {
      'fade-in': 'fade-in .2s ease-in-out',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem', // Default padding value for container
        sm: '3rem', // Padding value for small screens
        md: '4rem',
        lg: '4rem', // Padding value for large screens
        xl: '5xl', // Padding value for large screens
      },
    },
  },
  plugins: [],
};
export default config;

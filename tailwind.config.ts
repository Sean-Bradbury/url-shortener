import type { Config } from 'tailwindcss'

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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray-text': '#9E9AA8',
        'gray-background': '#EFF1F7',
        'cyan': '#2BD0D0',
        'purple': '#3A3054',
        'black-background': '#232127',
        'black-text': '#34313D',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fadeIn': 'fadeIn 300ms linear forwards',
        'fadeOut': 'fadeOut 300ms linear forwards',
      },
    },
  },
  plugins: [],
}
export default config

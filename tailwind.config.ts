import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      custom: '0 2px 0 0 var(--custom-dark)',
    },
    extend: {
      colors: {
        custom: {
          white: 'var(--custom-white)',
          black: 'var(--custom-black)',
          background: 'var(--custom-background)',
          foreground: 'var(--custom-foreground)',
          card: {
            DEFAULT: 'var(--custom-card)',
            foreground: 'var(--custom-card-foreground)',
            dark: {
              DEFAULT: 'var(--custom-card-dark)',
              foreground: 'var(--custom-card-dark-foreground)',
            },
            green: {
              DEFAULT: 'var(--custom-primary)',
              foreground: 'var(--custom-secondary)',
            },
          },
          popover: {
            DEFAULT: 'var(--custom-popover)',
            foreground: 'var(--custom-popover-foreground)',
          },
          primary: {
            DEFAULT: 'var(--custom-primary)',
            foreground: 'var(--custom-primary-foreground)',
          },
          secondary: {
            DEFAULT: 'var(--custom-secondary)',
            foreground: 'var(--custom-secondary-foreground)',
          },
          muted: {
            DEFAULT: 'var(--custom-muted)',
            foreground: 'var(--custom-muted-foreground)',
          },
          accent: {
            DEFAULT: 'var(--custom-accent)',
            foreground: 'var(--custom-accent-foreground)',
          },
          destructive: {
            DEFAULT: 'var(--custom-destructive)',
            foreground: 'var(--custom-destructive-foreground)',
          },
          border: 'var(--custom-border)',
          input: 'var(--custom-input)',
          ring: 'var(--custom-ring)',
          chart: {
            '1': 'var(--custom-chart-1)',
            '2': 'var(--custom-chart-2)',
            '3': 'var(--custom-chart-3)',
            '4': 'var(--custom-chart-4)',
            '5': 'var(--custom-chart-5)',
          },
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
} satisfies Config;

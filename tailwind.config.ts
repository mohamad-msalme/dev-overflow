import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          500: '#FF7000',
          100: '#FFF1E6'
        },
        dark: {
          100: '#000000',
          200: '#0F1117',
          300: '#151821',
          400: '#212734',
          500: '#101012',
          header: 'rgba(15, 17, 23, 0.50)',
          border: 'var(--border-dark)'
        },
        light: {
          900: '#FFFFFF',
          800: '#F4F6F8',
          850: '#FDFDFD',
          700: '#DCE3F1',
          500: '#7B8EC8',
          400: '#858EAD',
          header: '#FFFFFF',
          'border-color': 'hsla(229, 18%, 82%, 0.33)'
        },
        'background-header': 'var(--background-header)',
        border: {
          DEFAULT: 'hsl(var(--border))'
        },

        //
        'dark-ingredient': 'var(--Dark-gradient)',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'var(--accent-foreground)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderColor: {
        light: {
          nav: 'var(--border-light)'
        }
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.19)',
        'light-nav': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.1)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
        //
        'light-header': '10px 10px 20px 0px rgba(218, 213, 213, 0.19);'
      },
      fontSize: {
        'h1-bold': [
          '2rem',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'h2-bold': [
          '1.5rem',
          {
            lineHeight: '130%',
            fontWeight: '700'
          }
        ],
        'h2-semiBold': [
          '1.5rem',
          {
            lineHeight: '130%',
            fontWeight: '600'
          }
        ],
        'h3-bold': [
          '1.25rem',
          {
            lineHeight: '130%',
            fontWeight: '700'
          }
        ],
        'h3-semiBold': [
          '1.25rem',
          {
            lineHeight: '130%',
            fontWeight: '600'
          }
        ],
        'base-med': [
          '1.12rem',
          {
            lineHeight: '140%',
            fontWeight: '500'
          }
        ],
        'base-semi': [
          '1.12rem',
          {
            lineHeight: '140%',
            fontWeight: '600'
          }
        ],
        'base-bold': [
          '1.12rem',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'par-reg': [
          '1rem',
          {
            lineHeight: '140%',
            fontWeight: '400'
          }
        ],
        'par-med': [
          '1rem',
          {
            lineHeight: '140%',
            fontWeight: '500'
          }
        ],
        'par-semi': [
          '1rem',
          {
            lineHeight: '140%',
            fontWeight: '600'
          }
        ],
        'body-med': [
          '0.8rem',
          {
            lineHeight: '130%',
            fontWeight: '500'
          }
        ],
        'small-med': [
          '0.7rem',
          {
            lineHeight: '130%',
            fontWeight: '500'
          }
        ]
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        spaceGrotesk: ['var(--font-spaceGrotesk)']
      },
      backgroundImage: {
        greyIngredient:
          'linear-gradient(267deg,rgba(23,28,35,0.91)10.27%,rgba(19,22,28,0.90)88.57%)',
        accentIngredient:
          'linear-gradient(93deg, #FF7000 -13.95%, #E2985E 99.53%, #E2995F 99.54%)',
        authDark: 'url(/assets/images/auth-dark.png)',
        authLight: 'url(/assets/images/auth-light.png)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
} satisfies Config

export default config

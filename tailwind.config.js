const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(80, 63, 205, 0.08)',
        'input-focus': '0 0 0 2px var(--color-primary)',
        glow: '0 0 10px rgba(139, 92, 246, 0.5)',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
        height: 'height',
        opacity: 'opacity',
        transform: 'transform',
      },
      // Enhanced responsive typography
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '1'],
        '6xl': ['3.75rem', '1'],
        '7xl': ['4.5rem', '1'],
        '8xl': ['6rem', '1'],
        '9xl': ['8rem', '1'],
      },
      // Breakpoints
      screens: {
        '3xs': '320px',
        '2xs': '375px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'fade-out': 'fadeOut 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
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
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  safelist: [
    'bg-primary',
    'text-primary',
    'border-primary',
    'bg-secondary',
    'text-secondary',
    'border-secondary',
    'bg-background',
    'text-background',
    'bg-foreground',
    'text-foreground',
    'bg-muted',
    'text-muted',
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
    },
    {
      pattern: /(mt|mb|mr|ml|my|mx|pt|pb|pr|pl|py|px)-[0-9]+/,
    },
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // Custom plugin for fluid typography
    plugin(function({ addUtilities, theme }) {
      const fluidUtilities = {};
      const fontSizeKeys = Object.keys(theme('fontSize'));
      
      fontSizeKeys.forEach(key => {
        if (key === '2xs' || key === 'xs') return;
        
        const [fontSize, lineHeight] = theme('fontSize')[key];
        const minSize = parseFloat(fontSize) * 0.75;
        const maxSize = parseFloat(fontSize);
        
        fluidUtilities[`.text-fluid-${key}`] = {
          fontSize: `clamp(${minSize}rem, 4vw + ${minSize}rem, ${maxSize}rem)`,
          lineHeight: lineHeight,
        };
      });
      
      addUtilities(fluidUtilities, {
        variants: ['responsive'],
      });
    }),
    // Aspect ratio plugin
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.aspect-4/3': {
          aspectRatio: '4 / 3',
        },
        '.aspect-16/9': {
          aspectRatio: '16 / 9',
        },
        '.aspect-1/1': {
          aspectRatio: '1 / 1',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }),
  ],
};
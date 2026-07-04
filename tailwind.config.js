/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          bg: {
            DEFAULT: '#FAFAFA',
            elevated: '#FFFFFF',
          },
          text: {
            primary: '#111111',
            secondary: '#666666',
            muted: '#9A9A9A',
          },
          accent: {
            indigo: '#4F46E5',
            'indigo-strong': '#4338CA',
            cyan: '#22D3EE',
            emerald: '#10B981',
          },
          border: {
            DEFAULT: 'rgba(17, 17, 17, 0.08)',
            strong: 'rgba(17, 17, 17, 0.14)',
          },
        },
        fontFamily: {
          display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
          body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        },
        boxShadow: {
          'soft-sm': '0 1px 2px rgba(17, 17, 17, 0.04), 0 1px 1px rgba(17, 17, 17, 0.02)',
          'soft-md': '0 4px 16px rgba(17, 17, 17, 0.06), 0 1px 2px rgba(17, 17, 17, 0.04)',
          'soft-lg': '0 12px 32px rgba(17, 17, 17, 0.08), 0 2px 6px rgba(17, 17, 17, 0.04)',
          focus: '0 0 0 3px rgba(79, 70, 229, 0.25)',
        },
        maxWidth: {
          content: '700px',
          page: '1200px',
        },
        transitionTimingFunction: {
          premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
        },
        borderRadius: {
          '2xl': '1rem',
          '3xl': '1.5rem',
        },
      },
    },
    plugins: [],
  };
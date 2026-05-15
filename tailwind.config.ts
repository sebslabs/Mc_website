import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0D0D0D',      // Premium Black
          charcoal: '#1A1A1A',   // Charcoal Gray
          white: '#FFFFFF',      // Pure White
          soft: '#F6F6F6',       // Soft White
          red: '#FF3B30',        // Vibrant Red
          hover: '#D62828',      // Deep Red Hover
          border: '#E5E5E5',     // Border Gray
          muted: '#8E8E93',      // Text Gray

          // Backward compatibility mappings
          navy: '#0D0D0D',       // Maps bg-brand-navy to Premium Black
          surface: '#F6F6F6',    // Maps bg-brand-surface to Soft White (Primary bright background)
          gold: '#FF3B30',       // Maps brand-gold to Vibrant Red Accent
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
        'wave-bar': 'waveBar 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.7' },
        },
        waveBar: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

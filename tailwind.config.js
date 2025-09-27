/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        global: {
          background1: "var(--global-bg-1)",
          background2: "var(--global-bg-2)",
          background3: "var(--global-bg-3)",
          background4: "var(--global-bg-4)",
          text1: "var(--global-text-1)",
          text2: "var(--global-text-2)",
        },
        button: {
          background1: "var(--button-bg-1)",
          text1: "var(--button-text-1)",
        },
        footer: {
          text1: "var(--footer-text-1)",
        },
        // tailwind.config.js
theme: {
  extend: {
    fontSize: {
      'xxl': '160px',
      'xxxl': '200px',
    }
  }
}

      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'azeret-mono': ['Azeret Mono', 'monospace'],
        barlow: ["Barlow Condensed", "sans-serif"],
        caudex: ['Caudex', 'serif'],
        'handel-gothic': ['Handel Gothic', 'sans-serif'],
      },
      // tailwind.config.js
theme: {
  extend: {
    fontSize: {
      'xxl': '160px',
      'xxxl': '900px',
    }
  }
}

    },
  },
  plugins: [],
};

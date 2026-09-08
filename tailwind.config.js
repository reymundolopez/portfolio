/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#faf5ee",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f0e8",
        "surface-container": "#f2ece4",
        "surface-container-high": "#ece6dc",
        "surface-container-highest": "#e6e0d6",
        "surface-variant": "#ece6dc",
        "surface-dim": "#dcd6cc",
        "surface-bright": "#faf5ee",
        "surface-tint": "#c2652a",
        "on-surface": "#3a302a",
        "on-surface-variant": "#605850",
        "inverse-surface": "#3a302a",
        "inverse-on-surface": "#faf5ee",
        "primary": "#c2652a",
        "primary-container": "#e08850",
        "primary-fixed": "#fbe8d8",
        "primary-fixed-dim": "#f0a878",
        "on-primary": "#ffffff",
        "on-primary-container": "#fbe8d8",
        "on-primary-fixed": "#401a08",
        "on-primary-fixed-variant": "#8a4518",
        "inverse-primary": "#f0a878",
        "secondary": "#78706a",
        "secondary-container": "#eae2da",
        "secondary-fixed": "#eae2da",
        "secondary-fixed-dim": "#cec6be",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#605850",
        "on-secondary-fixed": "#2a2420",
        "on-secondary-fixed-variant": "#504840",
        "tertiary": "#8c3c3c",
        "tertiary-container": "#d47070",
        "tertiary-fixed": "#fce0e0",
        "tertiary-fixed-dim": "#e8a0a0",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#3a2020",
        "on-tertiary-fixed": "#2e1515",
        "on-tertiary-fixed-variant": "#6e3030",
        "background": "#faf5ee",
        "on-background": "#3a302a",
        "outline": "#9a9088",
        "outline-variant": "#d8d0c8",
        "error": "#c0392b",
        "error-container": "#fce4e0",
        "on-error": "#ffffff",
        "on-error-container": "#7a1a10"
      },
      fontFamily: {
        headline: ["'EB Garamond'", "Georgia", "serif"],
        display: ["'EB Garamond'", "Georgia", "serif"],
        body: ["'Manrope'", "sans-serif"],
        label: ["'Manrope'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace", "monospace"]
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(58, 48, 42, 0.04)',
        'card': '0 4px 20px rgba(58, 48, 42, 0.06)'
      }
    }
  },
  plugins: []
}

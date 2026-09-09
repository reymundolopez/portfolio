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
        brand: {
          bg: '#fbf8f5',
          surface: '#ffffff',
          card: '#fdfbf9',
          border: '#eae4dc',
          accent: '#c05c2a',
          accentHover: '#ab4f22',
          textPrimary: '#1a1816',
          textSecondary: '#6e6962',
          textMuted: '#9e978e',
          tagBg: '#f4efe8'
        }
      },
      fontFamily: {
        serif: ["'Newsreader'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        headline: ["'Newsreader'", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(50, 40, 30, 0.04)',
        'card': '0 10px 25px -5px rgba(50, 40, 30, 0.05)'
      }
    }
  },
  plugins: []
}

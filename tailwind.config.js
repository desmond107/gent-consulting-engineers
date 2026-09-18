/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sampled from the GCE logo blue (#1891C8)
        brand: {
          50: "#eef7fc",
          100: "#d6ecf8",
          200: "#a9d6ef",
          300: "#6fbae2",
          400: "#35a0d4",
          500: "#1891c8",
          600: "#0f74a6",
          700: "#0d5c84",
          800: "#0e4a69",
          900: "#0c2e44",
        },
        ink: {
          DEFAULT: "#0b1b2b",
          soft: "#3b4a5a",
          muted: "#64748b",
        },
        surface: "#f4f7fa",
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,43,.04), 0 8px 24px -8px rgba(11,27,43,.12)",
        lift: "0 2px 4px rgba(11,27,43,.05), 0 20px 40px -12px rgba(11,27,43,.22)",
      },
    },
  },
  plugins: [],
};

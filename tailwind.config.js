/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        surface: "#0a0a0f",
        "surface-elevated": "#12121a",
        "surface-hover": "#1a1a24",
        border: "#1c1c24",
        "border-strong": "#2a2a36",
        muted: "#71717a",
        "muted-foreground": "#a1a1aa",
        foreground: "#fafafa",
        accent: "#6366f1",
        "accent-foreground": "#e0e7ff",
        destructive: "#ef4444",
      },
      fontFamily: {
        sans: ["SpaceMono_400Regular"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

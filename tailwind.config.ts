import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#00b0de",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        limepie: {
          "50": "#f9fde9",
          "100": "#eefbc6",
          "200": "#e4f98f",
          "300": "#d9f54f",
          "400": "#d6f01f",
          "500": "#cfe012",
          "600": "#c6c60d",
          "700": "#9a8e0e",
          "800": "#807013",
          "900": "#6d5b16",
          "950": "#3f3109",
        },
        boston: {
          "50": "#ebfeff",
          "100": "#cdf9ff",
          "200": "#a1f1ff",
          "300": "#60e4ff",
          "400": "#18cdf8",
          "500": "#00b0de",
          "600": "#008fbf",
          "700": "#086f96",
          "800": "#105a7a",
          "900": "#124b67",
          "950": "#053047",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      san: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "risd-blue-50": "#e6ecff",
        "risd-blue-100": "#b0c5ff",
        "risd-blue-200": "#8aa9ff",
        "risd-blue-300": "#5482ff",
        "risd-blue-400": "#336aff",
        "risd-blue-500": "#0045ff",
        "risd-blue-600": "#003fe8",
        "risd-blue-700": "#0031b5",
        "risd-blue-800": "#00268c",
        "risd-blue-900": "#001d6b",
        "brandeis-blue-50": "#e6f1ff",
        "brandeis-blue-100": "#b0d3ff",
        "brandeis-blue-200": "#8abdff",
        "brandeis-blue-300": "#549fff",
        "brandeis-blue-400": "#338dff",
        "brandeis-blue-500": "#0070ff",
        "brandeis-blue-600": "#0066e8",
        "brandeis-blue-700": "#0050b5",
        "brandeis-blue-800": "#003e8c",
        "brandeis-blue-900": "#002f6b",
        "secondary-blue-50": "#f9feff",
        "secondary-blue-100": "#ebfaff",
        "secondary-blue-200": "#e2f8ff",
        "secondary-blue-300": "#d4f5ff",
        "secondary-blue-400": "#ccf3ff",
        "secondary-blue-500": "#bff0ff",
        "secondary-blue-600": "#aedae8",
        "secondary-blue-700": "#88aab5",
        "secondary-blue-800": "#69848c",
        "secondary-blue-900": "#50656b",
        "grey-50": "#eff0f1",
        "grey-100": "#ccd0d4",
        "grey-200": "#b3b9c0",
        "grey-300": "#9098a3",
        "grey-400": "#7b8591",
        "grey-500": "#5a6675",
        "grey-600": "#525d6a",
        "grey-700": "#404853",
        "grey-800": "#323840",
        "grey-900": "#262b31",
        "grey-alt-100": "#EEF2F8",
        "grey-alt-1": "#F5F5F5",
        "grey-alt-2": "#FBFBFB",
        "risd-alt" : "#8AA9FF",
        "brandeis-alt": "#B7F0FF"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

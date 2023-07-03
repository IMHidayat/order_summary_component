/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#f5f7ff",
        c2: "#77798e",
        c3: "#1f2f56",
        c4: "#766cf1",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.9rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.35rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        redHatDisplay: "Red Hat Display,sans,serif",
      },
    },
    screens: {
      xs: { max: "359px" },
      sm: { max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        default: {
          primary: "#3829e0",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#e0e8ff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          // "--border-btn": 0,
        },
      },
      {
        dark: {
          primary: "#641ae6",
          secondary: "##d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#1d232a",
          info: "#006ead",
          success: "#00ff19",
          warning: "#fed103",
          error: "#f87272",
          // "--border-btn": 0,
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "default",
  },
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: "Montserrat, sans-serif",
    },
    colors: {
      transparent: "transparent",
      body: "#000",
      white: "#FFF",
      error: {
        DEFAULT: "#F87171",
      },
      primary: {
        light: "#ffd995",
        DEFAULT: "#fead1b",
        dark: "#E59401",
        hover: "#765821",
        bg: "#fff6e5",
      },
      blue: {
        DEFAULT: "#1B6CFE",
      },
      gray: {
        DEFAULT: "#9CA3AF",
        dark: "#4B5563",
      },
      green: {
        DEFAULT: "#1BFEAD",
      },
      overlay: {
        DEFAULT: "#D1D5DB",
      },
    },
    animation: {
      spin: "spin .5s linear infinite",
    },
    extend: {
      fontSize: {
        footer: "16px",
        base: "19px",
        navlink: "30px",
        navlinksm: "24px",
      },
      spacing: {
        "5/100": "5%",
      },
      letterSpacing: {
        1: "1px",
        2: "2px",
        4: "4px",
        3: "3px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              fontSize: theme("fontSize.base"),
              color: theme("colors.body"),
              fontWeight: 300,
            },
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.hover"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "2xl": [
        "24px",
        {
          letterSpacing: "-0.01em",
        },
      ],
      xl: [
        "20px",
        {
          letterSpacing: "-0.01em",
        },
      ],
      sm: [
        "16px",
        {
          letterSpacing: ".2em",
        },
      ],
    },
    screens: {
      big: "820px",
    },
    extend: {
      colors: {
        apple: "red",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "90vw",
        sm: "600px",
        md: "678px",
        lg: "924px",
        xl: "1280px",
        "2xl": "1596px",
      },
    },
    fontSize: {
      "4xl": [
        "24px",
        {
          letterSpacing: "-.01em",
        },
      ],
      sm: [
        "18px",
        {
          letterSpacing: "-.01em",
          lineHeight: "24px",
        },
      ],
      md: [
        "20px",
        {
          letterSpacing: "-.01em",
          lineHeight: "38px",
        },
      ],
      lg: [
        "32px",
        {
          letterSpacing: "-.01em",
          lineHeight: "42px",
        },
      ],
      xl: [
        "64px",
        {
          letterSpacing: "-.01em",
          lineHeight: "78px",
        },
      ],
    },
    extend: {
      colors: {
        apple: "red",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

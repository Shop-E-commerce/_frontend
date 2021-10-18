module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#a8741a",
        prihover: "#df2121",
      },
      keyframes: {
        fadeInLeft: {
          from: {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          to: {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        timebar: {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
        slideInDown: {
          from: {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1.3s both",
        timebar: "timebar 8s ease-in-out 0s 1 backwards",
        initial: "initial",
        slideInDown: ".8s ease-in-out 0s normal none running slideInDown",
      },
      transitionProperty: {
        maxHeight: "max-height",
        height: "height",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};

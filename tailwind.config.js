/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "scale-up-center": {
          "0%": {
            "-webkit-transform": "scale(0.5)",
            transform: "scale(0.5)",
          },
          "50%": {
            "-webkit-transform": "scale(1)",
            transform: "scale(1)",
          },
          "100%": {
            "-webkit-transform": "scale(0.5)",
            transform: "scale(0.5)",
          },
        },

        "slide-in-blurred-top": {
          "0%": {
            "-webkit-transform": "translateY(-30px) scaleY(1.5) scaleX(0.2)",
            transform: "translateY(-30px) scaleY(1.5) scaleX(0.2)",
            "-webkit-transform-origin": "50% 0%",
            " transform-origin": "50% 0%",
            "-webkit-filter": "blur(40px)",
            filter: "blur(40px)",
            opacity: 0,
          },
          "100%": {
            "-webkit-transform": "translateY(0) scaleY(1) scaleX(1)",
            transform: "translateY(0) scaleY(1) scaleX(1)",
            "-webkit-transform-origin": "50% 50%",
            " transform-origin": "50% 50%",
            "-webkit-filter": "blur(0)",
            filter: "blur(0)",
            opacity: 1,
          },
        },
        "flip-diagonal-2-br": {
          "0%": {
            "-webkit-transform": "rotate3d(-1, 1, 0, 0deg)",
            transform: "rotate3d(-1, 1, 0, 0deg)",
          },
          "100%": {
            "-webkit-transform": "rotate3d(-1, 1, 0, 180deg)",
            transform: "rotate3d(-1, 1, 0, 180deg)",
          },
        },
      },
      animation: {
        scale:
          "scale-up-center 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite both",
        topIn:
          "slide-in-blurred-top 2.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        flip: "flip-diagonal-2-br 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
      },
      textColor: {
        main: "#7986CB",
      },
      colors: {
        main: "#7986CB",
      },
    },
  },
  plugins: [],
};

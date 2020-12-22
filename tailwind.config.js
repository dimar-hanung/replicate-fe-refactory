const plugin = require("tailwindcss/plugin");
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  corePlugins: {
    // container: false
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: {
          active: "#e48800",
          gray: "rgba(11, 22, 43, 0.6)",
          dark: "#0c162a",
          disabled: "#99BBEC"
        },
        secondary: {
          active: "#5CA3BD",
          gray: "#F4F5F6",
          dark: "#003547",
          blue: "#005978"
        }
      },
      boxShadow: {
        "3xl": "0px 12px 20px 0px rgba(223, 223, 223, 0.8)"
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".-z-1": {
          zIndex: "-1"
        },
        ".bg__header": {
          backgroundImage: "linear-gradient(110deg, #00256C 10%, #04ACA4 90%)",
          opacity: "0.75"
        },
        ".w-max-1140": {
          maxWidth: "1140px"
        },
        ".w-max-540": {
          maxWidth: "540px"
        },
        ".bg-banner": {
          backgroundImage: "linear-gradient(90deg, #127BCA 0%, #35B4AE 100%)"
        }
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    })
  ]
};

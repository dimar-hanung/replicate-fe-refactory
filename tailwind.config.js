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
          dark: "#0c162a"
        },
        secondary: {
          gray: "#F4F5F6"
        }
      },
      text: {
        14: "14px"
      },
      width: {
        "30": "30px",
        "40": "40px"
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
        }
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    })
  ]
};

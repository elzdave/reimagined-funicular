module.exports = {
  // mode: "jit",
  purge: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      /* Large Colored Shadows */
      "lg-blue-gray": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(69, 90, 100, 0.6)`,
      "lg-gray": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(97, 97, 97, 0.6)`,
      "lg-brown": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(93, 64, 55, 0.6)`,
      "lg-deep-orange": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(230, 74, 25, 0.6)`,
      "lg-orange": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(245, 122, 0, 0.6)`,
      "lg-amber": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(255, 160, 0, 0.6)`,
      "lg-yellow": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(251, 192, 45, 0.6)`,
      "lg-lime": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(175, 180, 43, 0.6)`,
      "lg-light-green": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(104, 159, 56, 0.6)`,
      "lg-green": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(56, 142, 60, 0.6)`,
      "lg-teal": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 121, 107, 0.6)`,
      "lg-cyan": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(0, 151, 167, 0.6)`,
      "lg-light-blue": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(2, 136, 209, 0.6)`,
      "lg-blue": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(25, 118, 210, 0.6)`,
      "lg-indigo": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(48, 63, 159, 0.6)`,
      "lg-deep-purple": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(81, 45, 168, 0.6)`,
      "lg-purple": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(123, 31, 162, 0.6)`,
      "lg-pink": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(194, 24, 91, 0.6)`,
      "lg-red": `0 12px 22px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 13px 24px -11px rgba(211, 47, 47, 0.6)`,
      /* Medium Colored Shadows */
      "md-blue-gray": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(96, 125, 139, 0.2)`,
      "md-gray": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(158, 158, 158, 0.2)`,
      "md-brown": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(121, 85, 72, 0.2)`,
      "md-deep-orange": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 87, 36, 0.2)`,
      "md-orange": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 152, 0, 0.2)`,
      "md-amber": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 193, 7, 0.2)`,
      "md-yellow": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(255, 235, 59, 0.2)`,
      "md-lime": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(205, 220, 57, 0.2)`,
      "md-light-green": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(139, 195, 74, 0.2)`,
      "md-green": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(76, 175, 80, 0.2)`,
      "md-teal": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 150, 136, 0.2)`,
      "md-cyan": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(0, 188, 212, 0.2)`,
      "md-light-blue": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(3, 169, 244, 0.2)`,
      "md-blue": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(33, 150, 243, 0.2)`,
      "md-indigo": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(63, 81, 181, 0.2)`,
      "md-deep-purple": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(103, 58, 183, 0.2)`,
      "md-purple": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(156, 39, 176, 0.2)`,
      "md-pink": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(233, 30, 99, 0.2)`,
      "md-red": `0 6px 12px -3px rgba(0, 0, 0, 0.1), 0 4px 5px -2px rgba(0, 0, 0, 0.05), 0 2px 5px 0 rgba(244, 67, 54, 0.2)`,
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "current",
      white: "#ffffff",
      black: "#000000",
      "blue-gray": {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238",
      },
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
      orange: {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
      },
      amber: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
      },
      yellow: {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
      },
      lime: {
        50: "#f9fbe7",
        100: "#f0f4c3",
        200: "#e6ee9c",
        300: "#dce775",
        400: "#d4e157",
        500: "#cddc39",
        600: "#c0ca33",
        700: "#afb42b",
        800: "#9e9d24",
        900: "#827717",
      },
      green: {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
      },
      teal: {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
      },
      cyan: {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
      },
      "light-blue": {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
      },
      blue: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
      },
      indigo: {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
      },
      purple: {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
      },
      pink: {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
      },
      red: {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
      },
    },
    extend: {
      colors: {
        brown: {
          50: "#efebe9",
          100: "#d7ccc8",
          200: "#bcaaa4",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#5d4037",
          800: "#4e342e",
          900: "#3e2723",
        },
        "deep-orange": {
          50: "#fbe9e7",
          100: "#ffccbc",
          200: "#ffab91",
          300: "#ff8a65",
          400: "#ff7043",
          500: "#ff5722",
          600: "#f4511e",
          700: "#e64a19",
          800: "#d84315",
          900: "#bf360c",
        },
        "light-green": {
          50: "#f1f8e9",
          100: "#dcedc8",
          200: "#c5e1a5",
          300: "#aed581",
          400: "#9ccc65",
          500: "#8bc34a",
          600: "#7cb342",
          700: "#689f38",
          800: "#558b2f",
          900: "#33691e",
        },
        "deep-purple": {
          50: "#ede7f6",
          100: "#d1c4e9",
          200: "#b39ddb",
          300: "#9575cd",
          400: "#7e57c2",
          500: "#673ab7",
          600: "#5e35b1",
          700: "#512da8",
          800: "#4527a0",
          900: "#311b92",
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};

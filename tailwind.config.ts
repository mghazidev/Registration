import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const typographyPlugin = require("@tailwindcss/typography");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          black: "#000000",
          white: "#FFFFFF",
        },
        brand: {
          50: "#FBF3FF",
          100: "#F5E3FF",
          200: "#ECCDFF",
          400: "#DEA5FF",
          500: "#C96CFF",
          600: "#B635FF",
          700: "#A40FFF",
          800: "#8800E3",
          900: "#7A06C3",
          1000: "#450076",
        },
        red: {
          50: "#FFF4ED",
          100: "#FFE5D4",
          200: "#FFC8A8",
          300: "#FFA170",
          400: "#FF6E37",
          500: "#FF4C15",
          600: "#F02D06",
          700: "#F02D06",
          800: "#9E190E",
          900: "#7F180F",
          1000: "#450805",
        },
        yellow: {
          50: "#FFF8EB",
          100: "#FFECC6",
          200: "#FFD588",
          300: "#FFB236",
          400: "#FFA020",
          500: "#F97B07",
          600: "#DD5602",
          700: "#B73906",
          800: "#942B0C",
          900: "#7A250D",
          1000: "#461002",
        },
        green: {
          50: "#F0FDF6",
          100: "#DBFDED",
          200: "#B9F9DB",
          300: "#83F2BF",
          400: "#36E093",
          500: "#1DCA7D",
          600: "#12A764",
          700: "#128351",
          800: "#146742",
          900: "#125539",
          1000: "#042F1E",
        },
        cyan: {
          50: "#EDFEFD",
          100: "#D2FBFA",
          200: "#ABF6F3",
          300: "#70F0EE",
          400: "#38E2E2",
          500: "#13C5C7",
          600: "#139EA7",
          700: "#167E88",
          800: "#1B666F",
          900: "#1B555E",
          1000: "#0C3840",
        },
        pink: {
          50: "#FEF1F9",
          100: "#FEE5F5",
          200: "#FFCBEE",
          300: "#FFA1DE",
          400: "#FF56BE",
          500: "#FA3AAB",
          600: "#EA1888",
          700: "#CC0A6D",
          800: "#A80C59",
          900: "#8C0F4D",
          1000: "#56012B",
        },
        functional: {
          50: "#F4F6F9",
          100: "#EBEEF4",
          200: "#DAE0EB",
          300: "#C3CBDE",
          400: "#ABB2CE",
          500: "#949ABF",
          600: "#7E82AD",
          700: "#6B6D97",
          800: "#6B6D97",
          900: "#4B4D64",
          1000: "#2C2D3A",
        },
      },
      borderRadius: {
        xs: "4px",
        s: "8px",
        m: "12px",
        l: "16px",
        xl: "20px",
        "2xl": "24px",
        max: "1000px",
      },
      spacing: {
        0: "0px",
        2: "4px",
        3: "8px",
        4: "12px",
        5: "16px",
        6: "20px",
        7: "24px",
        8: "32px",
        9: "40px",
        10: "48px",
        11: "56px",
      },
      fontFamily: {
        customFustat: ["Fustat", "sans-serif"],
      },

      textDecoration: {
        underline: "underline",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "28px",
              lineHeight: "36px",
              fontWeight: "800",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            h2: {
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: "800",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            h3: {
              fontSize: "20px",
              lineHeight: "28px",
              fontWeight: "800",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            h4: {
              fontSize: "18px",
              lineHeight: "24px",
              fontWeight: "800",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            h5: {
              fontSize: "16px",
              lineHeight: "22px",
              fontWeight: "800",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            h6: {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "800",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },

            p: {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".body-1-medium": {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "700",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
              letterSpacing: "0em",
            },
            ".body-2-medium": {
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: "700",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".body-3-medium": {
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "700",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".body-1-regular": {
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".body-2-regular": {
              fontSize: "14px",
              lineHeight: "22px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".body-3-regular": {
              fontSize: "12px",
              lineHeight: "18px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },

            // Label Variants
            ".label-1-medium": {
              fontSize: "28px",
              lineHeight: "28px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-2-medium": {
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-3-medium": {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-4-medium": {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-1-regular": {
              fontSize: "28px",
              lineHeight: "36px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-2-regular": {
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-3-regular": {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },
            ".label-4-regular": {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
            },

            // Link Variants
            ".link-1-regular": {
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
              textDecoration: "underline",
            },
            ".link-2-regular": {
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
              textDecoration: "underline",
            },
            ".link-3-regular": {
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: "500",
              letterSpacing: "0em",
              fontStyle: "normal",
              fontFamily: "'Fustat', sans-serif",
              textDecoration: "underline",
            },

            // Display Typography
            ".display-1": {
              fontSize: "48px",
              lineHeight: "52px",
              fontWeight: "700",
              letterSpacing: "1%",
              fontStyle: "normal",
            },
            ".display-2": {
              fontSize: "40px",
              lineHeight: "44px",
              fontWeight: "700",
              letterSpacing: "1%",
              fontStyle: "normal",
            },
            ".display-3": {
              fontSize: "36px",
              lineHeight: "40px",
              fontWeight: "700",
              letterSpacing: "1%",
              fontStyle: "normal",
            },
          },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(function ({ addComponents }: any) {
      addComponents({
        ".prose .label-1-medium": {
          "@apply text-label-1-medium": "",
        },
        ".prose .label-2-medium": {
          "@apply text-label-2-medium": "",
        },
        ".prose .label-3-medium": {
          "@apply text-label-3-medium": "",
        },
        ".prose .label-4-medium": {
          "@apply text-label-4-medium": "",
        },
        ".prose .label-1-regular": {
          "@apply text-label-1-regular": "",
        },
        ".prose .label-2-regular": {
          "@apply text-label-2-regular": "",
        },
        ".prose .label-3-regular": {
          "@apply text-label-3-regular": "",
        },
        ".prose .label-4-regular": {
          "@apply text-label-4-regular": "",
        },
        ".prose .link-1-regular": {
          "@apply text-link-1-regular": "",
        },
        ".prose .link-2-regular": {
          "@apply text-link-2-regular": "",
        },
        ".prose .link-3-regular": {
          "@apply text-link-3-regular": "",
        },
        ".prose .body-1-medium": {
          "@apply text-body-1-medium": "",
        },
        ".prose .body-2-medium": {
          "@apply text-body-2-medium": "",
        },
        ".prose .body-3-medium": {
          "@apply text-body-3-medium": "",
        },
        ".prose .body-1-regular": {
          "@apply text-body-1-regular": "",
        },
        ".prose .body-2-regular": {
          "@apply text-body-2-regular": "",
        },
        ".prose .body-3-regular": {
          "@apply text-body-3-regular": "",
        },
        ".prose .display-1": {
          "@apply text-display-1": "",
        },
        ".prose .display-2": {
          "@apply text-display-2": "",
        },
        ".prose .display-3": {
          "@apply text-display-3": "",
        },
      });
    }),
  ],
} satisfies Config;

// fontSize: {
//   10: "10px",
//   12: "12px",
//   14: "14px",
//   16: "16px",
//   18: "18px",
//   20: "20px",
//   22: "22px",
//   24: "24px",
//   28: "28px",
//   32: "32px",
//   36: "36px",
//   40: "40px",
//   48: "48px",
// },
// lineHeight: {
//   10: "10px",
//   12: "12px",
//   14: "14px",
//   16: "16px",
//   18: "18px",
//   20: "20px",
//   22: "22px",
//   24: "24px",
//   28: "28px",
//   32: "32px",
//   36: "36px",
//   40: "40px",
//   48: "48px",
// },
// fontWeight: {
//   thin: "100",
//   extralight: "200",
//   light: "300",
//   normal: "400",
//   medium: "500",
//   semibold: "600",
//   bold: "700",
//   extrabold: "800",
//   black: "900",
// },
// letterSpacing: {
//   normal: "0em",
//   wide: "0.2em",
// },

// h7: {
//   fontSize: "12px",
//   lineHeight: "18px",
//   fontWeight: "800",
//   letterSpacing: "0em",
//   fontStyle: "normal",
//   fontFamily: "'Fustat', sans-serif",
// },
// h8: {
//   fontSize: "10px",
//   lineHeight: "14px",
//   fontWeight: "800",
//   letterSpacing: "0em",
//   fontStyle: "normal",
//   fontFamily: "'Fustat', sans-serif",
// },

// fontSize: {
//   "heading-1": [
//     "28px",
//     { lineHeight: "36px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-2": [
//     "24px",
//     { lineHeight: "32px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-3": [
//     "20px",
//     { lineHeight: "28px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-4": [
//     "18px",
//     { lineHeight: "24px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-5": [
//     "16px",
//     { lineHeight: "22px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-6": [
//     "14px",
//     { lineHeight: "20px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-7": [
//     "12px",
//     { lineHeight: "18px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   "heading-8": [
//     "10px",
//     { lineHeight: "14px", fontWeight: "800", letterSpacing: "0em" },
//   ],
//   //Body Variants Start
//   "body-1-medium": [
//     "16px",
//     { lineHeight: "24px", fontWeight: "700", letterSpacing: "0em" },
//   ],
//   "body-2-medium": [
//     "14px",
//     { lineHeight: "22px", fontWeight: "700", letterSpacing: "0em" },
//   ],
//   "body-3-medium": [
//     "12px",
//     { lineHeight: "18px", fontWeight: "700", letterSpacing: "0em" },
//   ],

//   "body-1-regular": [
//     "16px",
//     { lineHeight: "24px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "body-2-regular": [
//     "14px",
//     { lineHeight: "22px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "body-3-regular": [
//     "12px",
//     { lineHeight: "18px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   //Body Variants End

//   //Label Variant Start

//   "label-1-medium": [
//     "28px",
//     { lineHeight: "28px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "label-2-medium": [
//     "16px",
//     { lineHeight: "20px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "label-3-medium": [
//     "14px",
//     { lineHeight: "20px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "label-4-medium": [
//     "12px",
//     { lineHeight: "16px", fontWeight: "500", letterSpacing: "0em" },
//   ],

//   "label-1-regular": [
//     "28px",
//     { lineHeight: "36px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "label-2-regular": [
//     "16px",
//     { lineHeight: "20px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "label-3-regular": [
//     "14px",
//     { lineHeight: "20px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "label-4-regular": [
//     "12px",
//     { lineHeight: "16px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   //Label Variant End

//   //Link Variant Start
//   "link-1-regular": [
//     "16px",
//     { lineHeight: "20px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "link-2-regular": [
//     "14px",
//     { lineHeight: "20px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   "link-3-regular": [
//     "12px",
//     { lineHeight: "16px", fontWeight: "500", letterSpacing: "0em" },
//   ],
//   //Link Variant End

//   //Display Typography Start
//   "display-1": [
//     "48px",
//     { lineHeight: "52px", fontWeight: "700", letterSpacing: "1%" },
//   ],
//   "display-2": [
//     "40px",
//     { lineHeight: "44px", fontWeight: "700", letterSpacing: "1%" },
//   ],
//   "display-3": [
//     "36px",
//     { lineHeight: "40px", fontWeight: "700", letterSpacing: "1%" },
//   ],
//   //Display Typography End
// },

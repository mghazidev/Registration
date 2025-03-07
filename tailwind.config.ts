import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  darkMode: ["class"],
  mode: "jit",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/authentication/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          black: "#000000",
          white: "#FFFFFF",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        brand: {
          "50": "#5d00ba",
          "100": "#FBF3FF",
          "200": "#ECCDFF",
          "400": "#DEA5FF",
          "500": "#C96CFF",
          "600": "#B635FF",
          "700": "#A40FFF",
          "800": "#8800E3",
          "900": "#7A06C3",
          "1000": "#450076",
        },
        red: {
          "50": "#FFF4ED",
          "100": "#FFE5D4",
          "200": "#FFC8A8",
          "300": "#FFA170",
          "400": "#FF6E37",
          "500": "#FF4C15",
          "600": "#F02D06",
          "700": "#F02D06",
          "800": "#9E190E",
          "900": "#7F180F",
          "1000": "#450805",
        },
        yellow: {
          "50": "#FFF8EB",
          "100": "#FFECC6",
          "200": "#FFD588",
          "300": "#FFB236",
          "400": "#FFA020",
          "500": "#F97B07",
          "600": "#DD5602",
          "700": "#B73906",
          "800": "#942B0C",
          "900": "#7A250D",
          "1000": "#461002",
        },
        green: {
          "50": "#F0FDF6",
          "100": "#DBFDED",
          "200": "#B9F9DB",
          "300": "#83F2BF",
          "400": "#36E093",
          "500": "#1DCA7D",
          "600": "#12A764",
          "700": "#128351",
          "800": "#146742",
          "900": "#125539",
          "1000": "#042F1E",
        },
        cyan: {
          "50": "#EDFEFD",
          "100": "#D2FBFA",
          "200": "#ABF6F3",
          "300": "#70F0EE",
          "400": "#38E2E2",
          "500": "#13C5C7",
          "600": "#139EA7",
          "700": "#167E88",
          "800": "#1B666F",
          "900": "#1B555E",
          "1000": "#0C3840",
        },
        pink: {
          "50": "#FEF1F9",
          "100": "#FEE5F5",
          "200": "#FFCBEE",
          "300": "#FFA1DE",
          "400": "#FF56BE",
          "500": "#FA3AAB",
          "600": "#EA1888",
          "700": "#CC0A6D",
          "800": "#A80C59",
          "900": "#8C0F4D",
          "1000": "#56012B",
        },
        functional: {
          "50": "#F4F6F9",
          "100": "#212442",
          "200": "#DAE0EB",
          "300": "#C3CBDE",
          "400": "#ABB2CE",
          "500": "#949ABF",
          "600": "#7E82AD",
          "700": "#6B6D97",
          "800": "#6B6D97",
          "900": "#4B4D64",
          "1000": "#2C2D3A",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        custom: "0 6px 12px rgba(0, 0, 0, 0.1), 0 3px 8px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        xs: "4px",
        s: "8px",
        m: "12px",
        l: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "38px",
        max: "1000px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "0": "0px",
        "2": "4px",
        "3": "8px",
        "4": "12px",
        "5": "16px",
        "6": "20px",
        "7": "24px",
        "8": "32px",
        "9": "40px",
        "10": "48px",
        "11": "56px",
        "12": "66px",
        "13": "72px",
        "14": "80px",
        "15": "88px",
        "16": "96px",
        "17": "104px",
        "18": "112px",
        "19": "120px",
        "20": "128px",
        "21": "136px",
        "22": "144px",
      },
      fontFamily: {
        customFustat: ["Fustat", "sans-serif"],
      },
      textDecoration: {
        underline: "underline",
      },
      fontSize: {
        h1: [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "0em",
          },
        ],
        h2: [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "0em",
          },
        ],
        h3: [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
          },
        ],
        h4: [
          "18px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
          },
        ],
        h5: [
          "16px",
          {
            lineHeight: "22px",
            letterSpacing: "0em",
          },
        ],
        h6: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "body-1-medium": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
          },
        ],
        "body-2-medium": [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "0em",
          },
        ],
        "body-3-medium": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0em",
          },
        ],
        "body-1-regular": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
          },
        ],
        "body-2-regular": [
          "14px",
          {
            lineHeight: "22px",
            letterSpacing: "0em",
          },
        ],
        "body-3-regular": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0em",
          },
        ],
        "label-1-medium": [
          "28px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
          },
        ],
        "label-2-medium": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "label-3-medium": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "label-4-medium": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
          },
        ],
        "label-1-regular": [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "0em",
          },
        ],
        "label-2-regular": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "label-3-regular": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "label-4-regular": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
          },
        ],
        "link-1-regular": [
          "16px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "link-2-regular": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
          },
        ],
        "link-3-regular": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0em",
          },
        ],
        "display-1": [
          "48px",
          {
            lineHeight: "52px",
            letterSpacing: "1%",
          },
        ],
        "display-2": [
          "40px",
          {
            lineHeight: "44px",
            letterSpacing: "1%",
          },
        ],
        "display-3": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "1%",
          },
        ],
      },
      fontWeight: {
        thin: "400",
        medium: "500",
        bold: "700",
        extraBold: "800",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, config, theme }: any) {
      const fontSize = config("theme.fontSize");
      const fontFamily = theme("fontFamily.customFustat");
      const fontWeight = config("theme.fontWeight");

      addComponents({
        ".h1": {
          fontFamily: fontFamily,
          fontSize: fontSize.h1[0],
          lineHeight: fontSize.h1[1].lineHeight,
          letterSpacing: fontSize.h1[1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".h2": {
          fontFamily: fontFamily,
          fontSize: fontSize.h2[0],
          lineHeight: fontSize.h2[1].lineHeight,
          letterSpacing: fontSize.h2[1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".h3": {
          fontFamily: fontFamily,
          fontSize: fontSize.h3[0],
          lineHeight: fontSize.h3[1].lineHeight,
          letterSpacing: fontSize.h3[1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".h4": {
          fontFamily: fontFamily,
          fontSize: fontSize.h4[0],
          lineHeight: fontSize.h4[1].lineHeight,
          letterSpacing: fontSize.h4[1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".h5": {
          fontFamily: fontFamily,
          fontSize: fontSize.h5[0],
          lineHeight: fontSize.h5[1].lineHeight,
          letterSpacing: fontSize.h5[1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".h6": {
          fontFamily: fontFamily,
          fontSize: fontSize.h6[0],
          lineHeight: fontSize.h6[1].lineHeight,
          letterSpacing: fontSize.h6[1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".body-1-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["body-1-medium"][0],
          lineHeight: fontSize["body-1-medium"][1].lineHeight,
          letterSpacing: fontSize["body-1-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".body-2-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["body-2-medium"][0],
          lineHeight: fontSize["body-2-medium"][1].lineHeight,
          letterSpacing: fontSize["body-2-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".body-3-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["body-3-medium"][0],
          lineHeight: fontSize["body-3-medium"][1].lineHeight,
          letterSpacing: fontSize["body-3-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".body-1-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["body-1-regular"][0],
          lineHeight: fontSize["body-1-regular"][1].lineHeight,
          letterSpacing: fontSize["body-1-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".body-2-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["body-2-regular"][0],
          lineHeight: fontSize["body-2-regular"][1].lineHeight,
          letterSpacing: fontSize["body-2-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".body-3-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["body-3-regular"][0],
          lineHeight: fontSize["body-3-regular"][1].lineHeight,
          letterSpacing: fontSize["body-3-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-1-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-1-medium"][0],
          lineHeight: fontSize["label-1-medium"][1].lineHeight,
          letterSpacing: fontSize["label-1-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-2-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-2-medium"][0],
          lineHeight: fontSize["label-2-medium"][1].lineHeight,
          letterSpacing: fontSize["label-2-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-3-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-3-medium"][0],
          lineHeight: fontSize["label-3-medium"][1].lineHeight,
          letterSpacing: fontSize["label-3-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-4-medium": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-4-medium"][0],
          lineHeight: fontSize["label-4-medium"][1].lineHeight,
          letterSpacing: fontSize["label-4-medium"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-1-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-1-regular"][0],
          lineHeight: fontSize["label-1-regular"][1].lineHeight,
          letterSpacing: fontSize["label-1-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-2-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-2-regular"][0],
          lineHeight: fontSize["label-2-regular"][1].lineHeight,
          letterSpacing: fontSize["label-2-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-3-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-3-regular"][0],
          lineHeight: fontSize["label-3-regular"][1].lineHeight,
          letterSpacing: fontSize["label-3-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".label-4-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["label-4-regular"][0],
          lineHeight: fontSize["label-4-regular"][1].lineHeight,
          letterSpacing: fontSize["label-4-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
        },
        ".link-1-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["link-1-regular"][0],
          lineHeight: fontSize["link-1-regular"][1].lineHeight,
          letterSpacing: fontSize["link-1-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
          textDecoration: "underline",
        },
        ".link-2-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["link-2-regular"][0],
          lineHeight: fontSize["link-2-regular"][1].lineHeight,
          letterSpacing: fontSize["link-2-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
          textDecoration: "underline",
        },
        ".link-3-regular": {
          fontFamily: fontFamily,
          fontSize: fontSize["link-3-regular"][0],
          lineHeight: fontSize["link-3-regular"][1].lineHeight,
          letterSpacing: fontSize["link-3-regular"][1].letterSpacing,
          fontWeight: fontWeight.medium,
          textDecoration: "underline",
        },
        ".display-1": {
          fontFamily: fontFamily,
          fontSize: fontSize["display-1"][0],
          lineHeight: fontSize["display-1"][1].lineHeight,
          letterSpacing: fontSize["display-1"][1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".display-2": {
          fontFamily: fontFamily,
          fontSize: fontSize["display-2"][0],
          lineHeight: fontSize["display-2"][1].lineHeight,
          letterSpacing: fontSize["display-2"][1].letterSpacing,
          fontWeight: fontWeight.bold,
        },
        ".display-3": {
          fontFamily: fontFamily,
          fontSize: fontSize["display-3"][0],
          lineHeight: fontSize["display-3"][1].lineHeight,
          letterSpacing: fontSize["display-3"][1].letterSpacing,
          fontWeight: fontWeight.semibold,
        },
      });
    }),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

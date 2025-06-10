// Color Type
export type ColorPartial = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// Colors
export const brandBlue: ColorPartial = {
  50: "#E6F5F8",
  100: "#D9F0F5",
  200: "#B0DFEA",
  300: "#0097BA",
  400: "#0089A7",
  500: "#00758F",
  600: "#00728C",
  700: "#005B70",
  800: "#004454",
  900: "#003541",
};

export const brandGreen: ColorPartial = {
  50: "#F5F9EB",
  100: "#DAF0C3",
  200: "#CAE49F",
  300: "#BAD97A",
  400: "#A6CC70",
  500: "#93BC6A",
  600: "#6E9E5C",
  700: "#4A834B",
  800: "#25663C",
  900: "#00492C",
};

export const grey: ColorPartial = {
  50: "#FFFFFF",
  100: "#F5F7FA",
  200: "#E6EAF0",
  300: "#CDD3DB",
  400: "#B4BAC4",
  500: "#858C99",
  600: "#646E78",
  700: "#474F5F",
  800: "#2B2F3F",
  900: "#121623",
};

export const red: ColorPartial = {
  50: "#FCEAE7",
  100: "#FFD9D3",
  200: "#FFC5BE",
  300: "#FFA79F",
  400: "#FD877E",
  500: "#FD453F",
  600: "#EB1414",
  700: "#BC1C1C",
  800: "#8D0F0F",
  900: "#5B0405",
};

export const orange: ColorPartial = {
  50: "#FEECD1",
  100: "#FEDCAA",
  200: "#FCCC79",
  300: "#FBAF35",
  400: "#F19724",
  500: "#CF7911",
  600: "#B26514",
  700: "#8E5515",
  800: "#694013",
  900: "#432504",
};

export const green: ColorPartial = {
  50: "#E2FAD5",
  100: "#C2ECB6",
  200: "#A2E592",
  300: "#7DD166",
  400: "#6DBD55",
  500: "#529F3C",
  600: "#488635",
  700: "#3A6E2B",
  800: "#255521",
  900: "#143509",
};

export const blue: ColorPartial = {
  50: "#E1F3FF",
  100: "#C1E6FC",
  200: "#9EDBFF",
  300: "#65C8FD",
  400: "#33B4F2",
  500: "#1696CE",
  600: "#0481B3",
  700: "#0E6991",
  800: "#104F6D",
  900: "#053044",
};

export const colors = {
  brandBlue,
  brandGreen,
  grey,
  gray: grey,
  red,
  orange,
  green,
  blue,
};

export const radii = {
  none: 0,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

// Typography
const toRem = (px: number) => `${px / 16}rem`;

export const nexusFontFamily = [
  "Open Sans",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
].join(", ");

export const typography = {
  fontFamily: nexusFontFamily,
  display: {
    fontSize: toRem(80),
    lineHeight: toRem(96),
    fontWeight: 800,
  },
  h1: {
    fontSize: toRem(80),
    lineHeight: toRem(96),
    fontWeight: 400,
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: toRem(48),
    lineHeight: toRem(60),
    fontWeight: 400,
    letterSpacing: "-0.02em",
  },
  h3: {
    fontSize: toRem(38),
    lineHeight: toRem(54),
    fontWeight: 400,
    letterSpacing: "-0.02em",
  },
  h4: {
    fontSize: toRem(24),
    lineHeight: toRem(32),
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  h5: {
    fontSize: toRem(24),
    lineHeight: toRem(32),
    fontWeight: 600,
  },
  h6: {
    fontSize: toRem(20),
    lineHeight: toRem(32),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: toRem(18),
    lineHeight: toRem(24),
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: toRem(16),
    lineHeight: toRem(24),
    fontWeight: 600,
  },
  bodyL: {
    fontSize: toRem(18),
    lineHeight: toRem(24),
    fontWeight: 400,
  },
  body: {
    fontSize: toRem(16),
    lineHeight: toRem(24),
    fontWeight: 400,
  },
  bodyS: {
    fontSize: toRem(14),
    lineHeight: toRem(24),
    fontWeight: 400,
  },
  button: {
    fontSize: toRem(15),
    lineHeight: toRem(24),
    fontWeight: 700,
  },
  caption: {
    fontSize: toRem(12),
    lineHeight: toRem(16),
    fontWeight: 400,
  },
  overline: {
    fontSize: toRem(12),
    lineHeight: toRem(16),
    letterSpacing: "0.1em",
    fontWeight: 400,
    textTransform: "uppercase" as const,
  },
};

// Spacing system (8px base)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};

// Breakpoints
export const breakpoints = {
  mobile: '48rem', // 768px
  tablet: '64rem', // 1024px
  desktop: '80rem', // 1280px
};
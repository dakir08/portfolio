export type ColorType = {
  primary: string;
  secondary: string;
};

export interface Color {
  text: ColorType;
  background: ColorType;
  main: ColorType;
  error: ColorType;
}

export const color: Color = {
  background: {
    primary: "#263545",
    secondary: "#2c3e50",
  },
  text: {
    primary: "rgba(255, 255, 255, 0.87)",
    secondary: "rgba(255, 255, 255, 0.65)",
  },
  main: {
    primary: "#19B5FE",
    secondary: "#22A7F0",
  },
  error: {
    primary: "#e74c3c",
    secondary: "#c0392b",
  },
};

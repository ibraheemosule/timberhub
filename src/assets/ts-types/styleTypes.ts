import { ThemeType } from "../styles/theme";
export interface IStyle {
  theme: ThemeType;
}
export interface IBtnStyle extends IStyle {
  bg?: string;
}

export interface IFormHeaderStyle extends IStyle {
  border: boolean;
}

import { MouseEvent } from "react";
import { ThemeType } from "../styles/theme";
export interface IStyle {
  theme: ThemeType;
}

export interface ICreateProductStyle {
  modal: boolean;
}
export interface IBtnStyle {
  bg?: boolean;
  theme: ThemeType;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IFormHeaderStyle extends IStyle {
  border: boolean;
}

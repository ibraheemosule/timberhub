import React from "react";
import { ThemeType } from "../styles/theme";
export interface IStyle {
  theme: ThemeType;
}

export interface ICreateProductStyle {
  modal: boolean;
}
export interface IBtnStyle extends React.HTMLAttributes<HTMLButtonElement> {
  bg?: boolean;
  theme: ThemeType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IFormHeaderStyle extends IStyle {
  border: boolean;
}

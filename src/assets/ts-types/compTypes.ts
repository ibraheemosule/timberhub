import { ReactElement, FC } from "react";

export interface ILayout {
  children: ReactElement;
}

export interface IBtn {
  text: string;
}

export interface IFormHeader {
  children?: ReactElement;
  title: string;
  Icon: FC;
}

export interface ISelectField {
  type: string;
}

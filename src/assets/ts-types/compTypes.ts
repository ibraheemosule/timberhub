import { ReactElement, FC, Dispatch, SetStateAction } from "react";
import { RowItemType } from "./dataTypes";

export interface ILayout {
  children: ReactElement;
}

export interface IBtn {
  text: string;
  click: Dispatch<SetStateAction<boolean>>;
}

export interface IFormHeader {
  children?: ReactElement;
  title: string;
  Icon: FC;
}

export interface ISelectField {
  type: string;
}
export interface IProductItem {
  data: RowItemType;
}

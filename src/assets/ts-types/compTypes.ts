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
  info: [
    string,
    {
      Icon: FC<Record<string, unknown>>;
      options: string[];
      select?: (string[] | null[])[];
    }
  ];
}

export interface ISelectField {
  options: string;
  select?: string[] | null[] | undefined;
  value: (e: string | number) => void;
}
export interface IProductItem {
  data: RowItemType;
}

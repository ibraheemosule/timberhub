import { ReactElement, FC, MouseEvent } from "react";
import { RowItemType } from "./dataTypes";

export interface IContextWrapper {
  children: ReactElement;
  fetchedData: RowItemType[];
}

export interface IBtn {
  text: string;
  click: (event: MouseEvent<HTMLButtonElement>) => void;
}
export interface IFormHeader {
  formField: [
    string,
    {
      Icon: FC<Record<string, unknown>>;
      options: string[];
      select?: string[][];
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

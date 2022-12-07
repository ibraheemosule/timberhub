import { ReactElement, FC, MouseEvent } from "react";
import { Idata, RowItemType } from "./dataTypes";

export interface IContextWrapper {
  children: ReactElement;
  fetchedData: Idata;
  url: string;
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

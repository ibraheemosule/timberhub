import { ReactElement, FC, MouseEvent } from "react";
import { ProductType } from "./dataTypes";

export interface IContextWrapper {
  children: ReactElement;
  fetchedData: ProductType[];
}

export interface IBtn {
  text: string;
  click: (event: MouseEvent<HTMLButtonElement>) => void;
  bg?: string;
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
  title: string;
  dropdownList?: (string | null)[] | undefined;
  value: (e: string) => void;
}
export interface IProductItem {
  data: ProductType;
}

export interface ITitle {
  title: string;
  btnText: string;
  eventHandler: () => void;
}

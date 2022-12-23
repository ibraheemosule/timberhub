import { ProductType } from "./dataTypes";

export interface ISelectField {
  title: string;
  dropdownList?: (string | null)[] | undefined;
  value: (e: string) => void;
}
export interface IProductItem {
  product: ProductType;
}

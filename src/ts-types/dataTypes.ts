import { Dispatch, SetStateAction } from "react";

export interface IContext {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  list: ProductType[];
  setList: Dispatch<SetStateAction<ProductType[]>>;
  rows: ProductType[];
  setRows: Dispatch<SetStateAction<ProductType[]>>;
  newProduct: ProductType;
  setNewProduct: Dispatch<SetStateAction<ProductType>>;
  formError: string;
  setFormError: Dispatch<SetStateAction<string>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
export type ProductType = {
  readonly id: string;
  created: number;
  usage: string;
  species: string;
  drying_method: string;
  grade: string;
  treatment: string | null;
  dimensions: {
    thickness: number;
    width: number;
    length: number;
    readonly id: string;
  }[];
};
export interface Idata {
  row: ProductType[];
}

export interface IDimension {
  thickness: number;
  width: number;
  length: number;
  readonly id: string;
}

import { Dispatch, SetStateAction } from "react";

export interface IContext {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  list: RowItemType[];
  setList: Dispatch<SetStateAction<RowItemType[]>>;
  rows: RowItemType[];
  setRows: Dispatch<SetStateAction<RowItemType[]>>;
  newProduct: RowItemType;
  setNewProduct: Dispatch<SetStateAction<RowItemType>>;
  formError: string;
  setFormError: Dispatch<SetStateAction<string>>;
}
export type RowItemType = {
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
  }[];
};
export interface Idata {
  row: RowItemType[];
}

export interface IDimension {
  thickness: number;
  width: number;
  length: number;
}

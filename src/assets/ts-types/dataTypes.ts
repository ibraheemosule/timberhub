import { Dispatch, SetStateAction } from "react";
import data from "../../../data";

export interface IContext {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  list: RowItemType[];
  setList: Dispatch<SetStateAction<RowItemType[]>>;
  rows: RowItemType[];
  setRows: Dispatch<SetStateAction<RowItemType[]>>;
}
export type RowItemType = typeof data.row[0];
export interface Idata {
  row: RowItemType[];
}

export interface IDimension {
  thickness: number;
  width: number;
  length: number;
}

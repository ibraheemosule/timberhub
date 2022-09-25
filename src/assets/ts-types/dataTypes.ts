import { Dispatch, SetStateAction } from "react";

export interface IContext {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

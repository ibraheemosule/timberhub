import { createContext } from "react";
import { IContext } from "../ts-types/dataTypes";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const Context = createContext<IContext>(null!);

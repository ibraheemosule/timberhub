/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Context } from "../../../utils/Context";
import { useEffect, useState, ReactElement } from "react";
import { newProductObj } from "../../../utils";
import { ProductType } from "../../../ts-types/dataTypes";

export interface IContextWrapper {
  children: ReactElement;
  fetchedData: ProductType[];
}

const ContextWrapper: React.FC<IContextWrapper> = ({
  children,
  fetchedData,
}) => {
  const [modal, setModal] = useState(false),
    [list, setList] = useState<ProductType[]>([...fetchedData]),
    [rows, setRows] = useState<ProductType[]>([...fetchedData]),
    [newProduct, setNewProduct] = useState({} as ProductType),
    [formError, setFormError] = useState(""),
    [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setNewProduct({
      ...newProductObj,
      dimensions: [...newProductObj.dimensions],
    });
  }, []);

  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        list,
        setList,
        rows,
        setRows,
        newProduct,
        setNewProduct,
        formError,
        setFormError,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextWrapper;

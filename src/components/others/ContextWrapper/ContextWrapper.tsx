/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IContextWrapper } from "../../../ts-types/componentsTypes";
import { Context } from "../../../utils/Context";
import { useEffect, useState } from "react";
import { newProductFormat } from "../../../utils";
import { RowItemType } from "../../../ts-types/dataTypes";

const ContextWrapper: React.FC<IContextWrapper> = ({
  children,
  fetchedData,
}) => {
  const [modal, setModal] = useState(false),
    [list, setList] = useState<RowItemType[]>([...fetchedData.row]),
    [rows, setRows] = useState<RowItemType[]>([...fetchedData.row]),
    [newProduct, setNewProduct] = useState({} as RowItemType),
    [formError, setFormError] = useState("");

  useEffect(() => {
    setNewProduct({
      ...newProductFormat,
      dimensions: [...newProductFormat.dimensions],
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextWrapper;

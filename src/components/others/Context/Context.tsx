import { ILayout } from "../../../ts-types/componentsTypes";
import { Context } from "../../../assets/utils/Context";
import { useEffect, useState } from "react";
import data from "../../../../data";
import { dataFormat } from "../../../assets/utils";
import { RowItemType } from "../../../ts-types/dataTypes";

const Layout: React.FC<ILayout> = ({ children }) => {
  const [modal, setModal] = useState(false),
    [list, setList] = useState([...data.row]),
    [rows, setRows] = useState([...data.row]),
    [obj, setObj] = useState({} as RowItemType),
    [error, setError] = useState(false);

  useEffect(() => {
    setObj({
      ...dataFormat,
      dimensions: [...dataFormat.dimensions],
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
        obj,
        setObj,
        error,
        setError,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Layout;

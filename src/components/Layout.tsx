import { ILayout } from "../assets/ts-types/compTypes";
import { Context } from "../assets/utils/Context";
import { useState } from "react";
import data from "../../data";
import { dataFormat } from "../assets/utils";

const Layout: React.FC<ILayout> = ({ children }) => {
  const [modal, setModal] = useState(false),
    [list, setList] = useState([...data.row]),
    [rows, setRows] = useState([...data.row]),
    [obj, setObj] = useState({ ...dataFormat }),
    [error, setError] = useState(false),
    [submit, setSubmit] = useState(false);

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

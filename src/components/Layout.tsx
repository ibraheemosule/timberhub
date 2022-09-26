import { ILayout } from "../assets/ts-types/compTypes";
import { Context } from "../assets/utils/Context";
import { useState } from "react";
import data from "../../data";

const Layout: React.FC<ILayout> = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([...data.row]);
  const [rows, setRows] = useState([...data.row]);

  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        list,
        setList,
        rows,
        setRows,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Layout;

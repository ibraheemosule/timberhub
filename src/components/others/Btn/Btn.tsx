import { memo } from "react";
import { IBtn } from "../../../ts-types/componentsTypes";
import { S_Btn } from "./S_Btn";

const Btn: React.FC<IBtn> = ({ text, click }) => {
  return (
    <S_Btn onClick={click} bg={text.includes("create")}>
      {text}
    </S_Btn>
  );
};

export default memo(Btn);

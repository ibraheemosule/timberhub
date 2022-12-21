import { memo } from "react";
import { IBtn } from "../../../ts-types/componentsTypes";
import { S_Btn } from "./S_Btn";

const Btn: React.FC<IBtn> = ({ text, click, bg }) => {
  return (
    <S_Btn onClick={click} bg={bg}>
      {text}
    </S_Btn>
  );
};

export default memo(Btn);

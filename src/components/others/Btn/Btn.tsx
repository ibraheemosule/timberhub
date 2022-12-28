import { memo, MouseEvent } from "react";
import { S_Btn } from "./S_Btn";

interface IBtn {
  text: string;
  click: (event: MouseEvent<HTMLButtonElement>) => void;
  bg?: string;
}

const Btn: React.FC<IBtn> = ({ text, click, bg }) => {
  return (
    <S_Btn onClick={click} bg={bg} data-test="btn">
      {text}
    </S_Btn>
  );
};

export default memo(Btn);

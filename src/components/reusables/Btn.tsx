import { IBtn } from "../../assets/ts-types/compTypes";
import { BtnStyle } from "../../assets/styles/reusables/BtnStyle";

const Btn: React.FC<IBtn> = ({ text, click }) => {
  return (
    <BtnStyle onClick={click} bg={text.includes("create")}>
      {text}
    </BtnStyle>
  );
};

export default Btn;

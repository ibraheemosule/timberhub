import { IBtn } from "../../assets/ts-types/compTypes";
import { BtnStyle } from "../../assets/styles/reusables/BtnStyle";

const Btn: React.FC<IBtn> = ({ text }) => {
  return <BtnStyle>{text}</BtnStyle>;
};

export default Btn;

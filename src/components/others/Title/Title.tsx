import { S_title } from "./S_title";
import { S_container } from "../reusable-styles/S_container";
import Btn from "../Btn/Btn";

interface ITitle {
  title: string;
  btnText: string;
  eventHandler: () => void;
}

const Title: React.FC<ITitle> = ({ title, btnText, eventHandler }) => {
  return (
    <S_title>
      <S_container>
        <h1>{title}</h1>
        <Btn text={btnText} click={eventHandler} />
      </S_container>
    </S_title>
  );
};

export default Title;

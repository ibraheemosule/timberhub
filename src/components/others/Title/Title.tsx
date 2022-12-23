import { S_Title } from "./S_Title";
import { S_Container } from "../reusable-styles/S_Container";
import Btn from "../Btn/Btn";

interface ITitle {
  title: string;
  btnText: string;
  eventHandler: () => void;
}

const Title: React.FC<ITitle> = ({ title, btnText, eventHandler }) => {
  return (
    <S_Title>
      <S_Container>
        <h1>{title}</h1>
        <Btn text={btnText} click={eventHandler} />
      </S_Container>
    </S_Title>
  );
};

export default Title;

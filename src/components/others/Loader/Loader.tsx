import { S_Loader } from "./S_Loader";

const Loader: React.FC = () => {
  return (
    <S_Loader>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S_Loader>
  );
};

export default Loader;

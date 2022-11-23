import { S_ProductsHeader } from "./S_ProductHeader";
import { S_Container } from "../../others/reusable-styles/S_Container";
import Btn from "../../others/Btn/Btn";
import { useContext } from "react";
import { Context } from "../../../assets/utils/Context";

const btnText = "+ CREATE PRODUCT";

const ProductHeader: React.FC = () => {
  const { setModal } = useContext(Context);

  const toggleModal = () => {
    document.querySelector(".create-product")?.classList.add("show");
    setModal(true);
  };

  return (
    <S_ProductsHeader>
      <S_Container>
        <h1>All Products</h1>
        <Btn text={btnText} click={toggleModal} />
      </S_Container>
    </S_ProductsHeader>
  );
};

export default ProductHeader;

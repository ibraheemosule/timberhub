import { ProductHeaderStyle } from "../../assets/styles/all-products/ProductHeaderStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";
import Btn from "../reusables/Btn";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";

const btnText = "+ CREATE PRODUCT";

const ProductHeader: React.FC = () => {
  const { setModal } = useContext(Context);

  const toggleModal = () => {
    document.querySelector(".create-product")?.classList.add("show");
    setModal(true);
  };

  return (
    <ProductHeaderStyle>
      <ContainerStyle>
        <h1>All Products</h1>
        <Btn text={btnText} click={toggleModal} />
      </ContainerStyle>
    </ProductHeaderStyle>
  );
};

export default ProductHeader;

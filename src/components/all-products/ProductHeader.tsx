import { ProductHeaderStyle } from "../../assets/styles/all-products/ProductHeaderStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";
import Btn from "../reusables/Btn";

const btnText = "+ CREATE PRODUCT";

const ProductHeader: React.FC = () => {
  return (
    <ProductHeaderStyle>
      <ContainerStyle>
        <h1>All Products</h1>
        <Btn text={btnText} />
      </ContainerStyle>
    </ProductHeaderStyle>
  );
};

export default ProductHeader;

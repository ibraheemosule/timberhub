import { ProductHeaderStyle } from "../../assets/styles/ProductHeaderStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";

const ProductHeader: React.FC = () => {
  return (
    <ProductHeaderStyle>
      <ContainerStyle>
        <h1>All Products</h1>
        <button>+ CREATE PRODUCT</button>
      </ContainerStyle>
    </ProductHeaderStyle>
  );
};

export default ProductHeader;

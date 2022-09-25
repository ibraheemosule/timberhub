import { ProductListStyle } from "../../assets/styles/all-products/ProductListStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";

const ProductList: React.FC = () => {
  return (
    <ContainerStyle>
      <ProductListStyle>
        <div>
          <h6>
            Product <small>(Species, Grade, Drying)</small>
          </h6>
          <h6>
            Dimensions <small>(ThicknessxWidth)</small>
          </h6>
        </div>
      </ProductListStyle>
    </ContainerStyle>
  );
};

export default ProductList;

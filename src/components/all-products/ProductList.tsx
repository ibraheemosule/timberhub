import { ProductListStyle } from "../../assets/styles/all-products/ProductListStyle";
import { ContainerStyle } from "../../assets/styles/ContainerStyle";
import ProductItem from "../reusables/ProductItem";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";

const ProductList: React.FC = () => {
  const { list } = useContext(Context);

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
        {list.map((val, i) => (
          <ProductItem data={val} key={i} />
        ))}
      </ProductListStyle>
    </ContainerStyle>
  );
};

export default ProductList;

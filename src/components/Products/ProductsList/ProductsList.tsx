import { S_ProductsList } from "./S_ProductsList";
import { S_Container } from "../../others/reusable-styles/S_Container";
import ProductItem from "./ProductItem/ProductItem";
import { useContext } from "react";
import { Context } from "../../../assets/utils/Context";

const ProductList: React.FC = () => {
  const { list } = useContext(Context);

  return (
    <S_Container>
      <S_ProductsList>
        <div>
          <h6>
            Product <small>(Species, Grade, Drying)</small>
          </h6>
          <h6>
            Dimensions <small>(ThicknessxWidth)</small>
          </h6>
        </div>
        {list.length > 0 ? (
          list.map((val, i) => <ProductItem data={val} key={i} />)
        ) : (
          <h5>No Item Found</h5>
        )}
      </S_ProductsList>
    </S_Container>
  );
};

export default ProductList;

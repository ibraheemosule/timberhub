import { S_productsList } from "./S_productsList";
import { S_container } from "../../../others/reusable-styles/S_container";
import ProductItem from "./ProductItem/ProductItem";
import { FC } from "react";
import { ProductType } from "../../../../ts-types/dataTypes";

type CompType = {
  paginatedProductArray: ProductType[];
};
const ProductList: FC<CompType> = ({ paginatedProductArray }) => {
  return (
    <S_container>
      <S_productsList>
        <div>
          <h6>
            Product <small>(Species, Grade, Drying, Usage, Treatment)</small>
          </h6>
          <h6>
            Dimensions <small>(ThicknessxWidth)</small>
          </h6>
        </div>
        {paginatedProductArray?.length > 0 ? (
          paginatedProductArray.map((product, i) => (
            <ProductItem product={product} key={i} />
          ))
        ) : (
          <h5 data-test="empty-list">No Item Found</h5>
        )}
      </S_productsList>
    </S_container>
  );
};

export default ProductList;

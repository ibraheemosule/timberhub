import { S_ProductItem } from "./S_ProductItem";
import ProductIcon from "../../../../assets/icons/ProductIcon";
import { IProductItem } from "../../../../ts-types/componentsTypes";
import { formatDate, getProductDimensionsDuplicates } from "../../../../utils";
import { memo } from "react";

const ProductItem: React.FC<IProductItem> = ({ data }) => {
  return (
    <S_ProductItem>
      <div>
        <ProductIcon />
        <div className="wrapper">
          <div>
            <p>
              {data.species}, {data.grade}, {data.drying_method}
            </p>
            <p>
              <mark>#{data.id?.slice(0, 6) + "..."}</mark>{" "}
              <span>{formatDate(data.created)}</span>
            </p>
          </div>
          <div>
            {/* group the dimensions with the same thickness and width*/}
            {getProductDimensionsDuplicates(data).map((val, i) => {
              if (i > 2) return;
              return (
                <p key={val[0]}>
                  <span>{val[1]}</span>
                  {val[0]}
                </p>
              );
            })}

            {/* Checks if there are more items in the array 
            and shows the number left*/}
            {getProductDimensionsDuplicates(data).length - 3 > 0 ? (
              <p>{getProductDimensionsDuplicates(data).length - 3} more sets</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </S_ProductItem>
  );
};

export default memo(ProductItem);

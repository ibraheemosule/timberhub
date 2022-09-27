import { ProductItemStyle } from "../../assets/styles/reusables/ProductItemStyle";
import ProductIcon from "../../assets/icons/ProductIcon";
import { IProductItem } from "../../assets/ts-types/compTypes";
import { formatDate, getDuplicates } from "../../assets/utils";

const ProductItem: React.FC<IProductItem> = ({ data }) => {
  return (
    <ProductItemStyle>
      <div>
        <ProductIcon />
        <div className="wrapper">
          <div>
            <p>
              {data.species}, {data.grade}, {data.drying_method}
            </p>
            <p>
              <mark>#{data.id}</mark> <span>{formatDate(data.created)}</span>
            </p>
          </div>
          <div>
            {/* group the dimensions with the same thickness and width*/}
            {getDuplicates(data).map((val, i) => {
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
            {getDuplicates(data).length - 3 > 0 ? (
              <p>{getDuplicates(data).length - 3} more sets</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </ProductItemStyle>
  );
};

export default ProductItem;

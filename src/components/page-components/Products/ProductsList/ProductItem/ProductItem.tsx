import { S_productItem } from "./S_productItem";
import ProductIcon from "../../../../../assets/icons/ProductIcon";
import { IProductItem } from "../../../../../ts-types/resuableCompTypes";
import {
  formatDate,
  getProductDimensionsDuplicates,
} from "../../../../../utils";
import { memo, useContext, useEffect, useRef } from "react";
import { Context } from "../../../../../utils/Context";
import Link from "next/link";

const ProductItem: React.FC<IProductItem> = ({ product }) => {
  const { searchValue } = useContext(Context),
    titleElement = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const titles = `${product.species} ${product.grade} ${
      product.drying_method
    } ${product.usage} ${product.treatment || ""}`;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const pTag = titleElement.current!;

    if (!searchValue) {
      pTag.style.textTransform = "capitalize";
      pTag.innerHTML = titles;
      return;
    }

    pTag.style.textTransform = "unset";

    const highlightedText = titles
      .toLowerCase()
      .replaceAll(
        searchValue.toLowerCase(),
        `<mark>${searchValue.toLowerCase()}</mark>`
      )
      .split(" ")
      .map(text => {
        return text && text[0].toUpperCase() + text.substring(1);
      })
      .join(" ");

    pTag.innerHTML = highlightedText;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Link href={`/${product.id}`} passHref>
      <S_productItem data-test="product-item">
        <div>
          <ProductIcon />
          <div className="wrapper">
            <div>
              <p
                ref={titleElement}
                className="categories"
                data-test="categories"
              >
                {/* {product.species}, {product.grade}, {product.drying_method},{" "}
                {product.usage}, {product.treatment} */}
              </p>
              <p>
                <mark>#{product.id?.slice(0, 6) + "..."}</mark>{" "}
                <span>{formatDate(product.created)}</span>
              </p>
            </div>
            <div className="measurements">
              {/* group the dimensions with the same thickness and width*/}
              {getProductDimensionsDuplicates(product).map((val, i) => {
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
              {getProductDimensionsDuplicates(product).length - 3 > 0 ? (
                <p>
                  {getProductDimensionsDuplicates(product).length - 3} more sets
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </S_productItem>
    </Link>
  );
};

export default memo(ProductItem);

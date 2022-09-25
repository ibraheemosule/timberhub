import { ProductItemStyle } from "../../assets/styles/reusables/ProductItemStyle";
import ProductIcon from "../../assets/icons/ProductIcon";

const ProductItem: React.FC = () => {
  return (
    <ProductItemStyle>
      <div>
        <ProductIcon />
        <div className="wrapper">
          <div>
            <p>Spruce, Nordic Blue, KD</p>
            <p>
              <mark>#00010072</mark> <span>31. August 2022</span>
            </p>
          </div>
          <div>
            <p>
              <span>1</span>
              16x1050
            </p>
            <p>
              <span>1</span>
              16x1050
            </p>
            <p>+ 5 more sets</p>
          </div>
        </div>
      </div>
    </ProductItemStyle>
  );
};

export default ProductItem;

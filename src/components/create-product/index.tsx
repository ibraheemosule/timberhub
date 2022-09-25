import { CreateProductStyle } from "../../assets/styles/create-product/CreateProductStyle";
import FormHeader from "../reusables/FormHeader";
import ProductIcon from "../../assets/icons/ProductIcon";
import SpecificationIcon from "../../assets/icons/SpecificationIcon";
import DimensionIcon from "../../assets/icons/DimensionIcon";
import Btn from "../reusables/Btn";
import { useEffect, useRef, useState } from "react";

const Titles = {
  "Sawn Timber": ProductIcon,
  Specifications: SpecificationIcon,
  Dimensions: DimensionIcon,
};
const CreateProduct: React.FC = () => {
  const [slideOut, setSlideOut] = useState(false);
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideOut)
      element.current && element.current.classList.add("animate-reverse");
  }, [slideOut]);

  return (
    <CreateProductStyle>
      <div ref={element}>
        <h1>Create Product</h1>
        {Object.entries(Titles).map((Val, i) => (
          <FormHeader Icon={Val[1]} title={Val[0]} key={i} />
        ))}

        <footer>
          <button onClick={() => setSlideOut(true)}>close</button>
          <Btn text="create product" />
        </footer>
      </div>
    </CreateProductStyle>
  );
};

export default CreateProduct;

import { CreateProductStyle } from "../../assets/styles/create-product/CreateProductStyle";
import FormHeader from "../reusables/FormHeader";
import ProductIcon from "../../assets/icons/ProductIcon";
import SpecificationIcon from "../../assets/icons/SpecificationIcon";
import DimensionIcon from "../../assets/icons/DimensionIcon";

const Titles = {
  "Sawn Timber": ProductIcon,
  Specifications: SpecificationIcon,
  Dimensions: DimensionIcon,
};
const CreateProduct: React.FC = () => {
  return (
    <CreateProductStyle>
      <div>
        <h1>Create Product</h1>
        {Object.entries(Titles).map((Val, i) => (
          <FormHeader Icon={Val[1]} title={Val[0]} key={i} />
        ))}
      </div>
    </CreateProductStyle>
  );
};

export default CreateProduct;

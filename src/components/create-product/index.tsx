import { CreateProductStyle } from "../../assets/styles/create-product/CreateProductStyle";
import FormHeader from "../reusables/FormHeader";
import ProductIcon from "../../assets/icons/ProductIcon";
import SpecificationIcon from "../../assets/icons/SpecificationIcon";
import DimensionIcon from "../../assets/icons/DimensionIcon";
import Btn from "../reusables/Btn";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";

const Titles = {
  "Sawn Timber": ProductIcon,
  Specifications: SpecificationIcon,
  Dimensions: DimensionIcon,
};
const CreateProduct: React.FC = () => {
  const { modal, setModal } = useContext(Context);

  return (
    <CreateProductStyle modal={modal}>
      <div className="create-product">
        <h1>Create Product</h1>
        {Object.entries(Titles).map((Val, i) => (
          <FormHeader Icon={Val[1]} title={Val[0]} key={i} />
        ))}

        <footer>
          <button onClick={() => setModal(false)}>close</button>
          <Btn text="create product" click={() => setModal(true)} />
        </footer>
      </div>
    </CreateProductStyle>
  );
};

export default CreateProduct;

import { CreateProductStyle } from "../../assets/styles/create-product/CreateProductStyle";
import FormHeader from "../reusables/FormHeader";
import ProductIcon from "../../assets/icons/ProductIcon";
import SpecificationIcon from "../../assets/icons/SpecificationIcon";
import DimensionIcon from "../../assets/icons/DimensionIcon";
import Btn from "../reusables/Btn";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";

const Titles = {
  "Sawn Timber": {
    Icon: ProductIcon,
    options: ["usage", "species"],
    select: [
      ["Lorem ipsum dolor", "quis nostrud", "omnis iste natus error"],
      ["Lorem ipdolor", "quis trud", "omnite natusrror"],
    ],
  },
  Specifications: {
    Icon: SpecificationIcon,
    options: ["drying_method", "grade", "treatment"],
    select: [
      ["Lorem ipsum dolor", "quis nostrud", "omnis iste natus error"],
      ["Lorem ipdolor", "quis trud", "omnite natusrror"],
      ["Lorem ipdolor", "quis trud", "omnite natusrror"],
      [null],
    ],
  },
  Dimensions: {
    Icon: DimensionIcon,
    options: ["thickness", "width", "length"],
  },
};

const CreateProduct: React.FC = () => {
  const { modal, setModal } = useContext(Context);

  return (
    <CreateProductStyle modal={modal}>
      <div className="create-product">
        <h1>Create Product</h1>
        {Object.entries(Titles).map((val, i) => (
          <FormHeader info={val} key={i} />
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

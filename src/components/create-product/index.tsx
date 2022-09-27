/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CreateProductStyle } from "../../assets/styles/create-product/CreateProductStyle";
import FormHeader from "../reusables/FormHeader";
import Btn from "../reusables/Btn";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";
import { titles, validateData } from "../../assets/utils";

const CreateProduct: React.FC = () => {
  const { modal, setModal, obj, setList, rows, setRows, error, setError } =
    useContext(Context);

  const addObj = () => {
    if (!validateData(rows[0], obj)) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    const newObj = [...rows, obj];

    setRows(newObj);
    setList(newObj);
    setModal(false);
  };

  return (
    <CreateProductStyle modal={modal}>
      <div className="create-product">
        <h1>Create Product</h1>
        {Object.entries(titles).map((val, i) => (
          <FormHeader info={val} key={i} />
        ))}

        <footer>
          {error ? <h5>Please Select and Fill all fields</h5> : ""}
          <button onClick={() => setModal(false)}>close</button>
          <Btn text="create product" click={addObj} />
        </footer>
      </div>
    </CreateProductStyle>
  );
};

export default CreateProduct;

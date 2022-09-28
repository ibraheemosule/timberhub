import { CreateProductStyle } from "../../assets/styles/create-product/CreateProductStyle";
import FormHeader from "../reusables/FormHeader";
import Btn from "../reusables/Btn";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../assets/utils/Context";
import { titles, validateData } from "../../assets/utils";
import { dataFormat } from "../../assets/utils";

const CreateProduct: React.FC = () => {
  const {
    modal,
    setModal,
    obj,
    setObj,
    setList,
    rows,
    setRows,
    error,
    setError,
  } = useContext(Context);

  const parentElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parentElement.current) return;
    parentElement.current.scrollTo(0, 0);
  }, [modal]);

  const addObj = () => {
    if (!validateData(rows[0], obj)) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    const newObj = [obj, ...rows];

    setTimeout(() => {
      setRows(newObj);
      setList(newObj);
      closeModal();
    }, 500);
  };

  const closeModal = () => {
    setObj({
      ...dataFormat,
      dimensions: [...dataFormat.dimensions],
    });
    setModal(false);
  };

  return (
    <CreateProductStyle modal={modal} onClick={closeModal}>
      <div
        className="create-product"
        ref={parentElement}
        onClick={e => e.stopPropagation()}
      >
        <h1>Create Product</h1>
        {Object.entries(titles).map((val, i) => (
          <FormHeader info={val} key={i} />
        ))}

        <footer>
          {error ? <h5>Please Select and Fill all fields</h5> : ""}
          <button onClick={closeModal}>close</button>
          <Btn text="create product" click={addObj} />
        </footer>
      </div>
    </CreateProductStyle>
  );
};

export default CreateProduct;

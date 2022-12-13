import { S_AddProductModal } from "./S_AddProductModal";
import FormHeader from "./FormHeader/FormHeader";
import Btn from "../others/Btn/Btn";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../utils/Context";
import { formFieldDetails, validateData } from "../../utils";
import { newProductFormat } from "../../utils";
import { S_SuccessMessageModal } from "../others/reusable-styles/S_SuccessMessageModal";
import { Idata, RowItemType } from "../../ts-types/dataTypes";
import Loader from "../others/Loader/Loader";

const AddProductModal: React.FC = () => {
  const {
    modal,
    setModal,
    newProduct,
    setNewProduct,
    setList,
    rows,
    setRows,
    error,
    setError,
  } = useContext(Context);

  const [successMsgPopUp, setSuccessMsgPopUp] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const parentElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parentElement.current) return;
    parentElement.current.scrollTo(0, 0);
  }, [modal]);

  const addnewProduct = async (): Promise<void> => {
    try {
      setLoading(true);

      if (!validateData(rows[0], newProduct)) {
        throw new Error("Ensure all fields are valid");
      }

      const postNewProduct = await fetch("/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const {
        data: { row },
      } = (await postNewProduct.json()) as { data: Idata };

      if (!row) throw new Error("An Error Occurred! Try Again");

      setRows(row);
      setList(row);

      setSuccessMsgPopUp(true);
      closeModal();

      setTimeout(() => {
        setSuccessMsgPopUp(false);
      }, 5000);
    } catch (e) {
      if (e instanceof Error && e.message) {
        setError(e.message);
      } else {
        setError("An Error Occurred");
      }
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 3000);
    }
  };

  const closeModal = () => {
    setNewProduct((prevDataFormat: RowItemType) => ({
      ...prevDataFormat,
      dimensions: [...newProductFormat.dimensions],
    }));
    setModal(false);
  };

  return (
    <>
      <S_AddProductModal modal={modal} onClick={closeModal}>
        <div
          className="create-product"
          ref={parentElement}
          onClick={e => e.stopPropagation()}
        >
          <h1>Create Product</h1>
          {Object.entries(formFieldDetails).map((titleKeyValueArray, i) => (
            <FormHeader formField={titleKeyValueArray} key={i} />
          ))}

          <footer>
            {error && <h5>{error}</h5>}
            {loading && <Loader />}

            <button onClick={closeModal}>close</button>
            <Btn text="create product" click={() => void addnewProduct()} />
          </footer>
        </div>
      </S_AddProductModal>
      {
        <S_SuccessMessageModal popup={successMsgPopUp}>
          Product Added
        </S_SuccessMessageModal>
      }
    </>
  );
};

export default AddProductModal;

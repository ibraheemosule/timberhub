import { S_AddProductModal } from "./S_AddProductModal";
import FormHeader from "./FormHeader/FormHeader";
import Btn from "../others/Btn/Btn";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../utils/Context";
import LoaderIcon from "../../assets/icons/LoaderIcon";
import {
  formFieldDetails,
  validateData,
  checkIfProductExist,
  apiRequest,
} from "../../utils";

import { newProductObj } from "../../utils";
import { S_SuccessMessageModal } from "../others/reusable-styles/S_SuccessMessageModal";
import { ProductType } from "../../ts-types/dataTypes";

const AddProductModal: React.FC = () => {
  const {
    modal,
    setModal,
    newProduct,
    setNewProduct,
    setList,
    list,
    setRows,
    formError,
    setFormError,
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
      setFormError("");

      if (!validateData(newProduct)) {
        throw new Error("Ensure all fields are valid");
      }

      const indexOfDuplicateProduct = checkIfProductExist(newProduct, list);

      const data: ProductType =
        indexOfDuplicateProduct > -1
          ? await apiRequest("PUT", {
              id: list[indexOfDuplicateProduct].id,
              dimensions: [
                ...list[indexOfDuplicateProduct].dimensions,
                ...newProduct.dimensions,
              ],
            } as ProductType)
          : await apiRequest("POST", newProduct);

      if (!data) throw new Error("An Error Occurred! Try Again");

      if (indexOfDuplicateProduct > -1) {
        setList(prevArray => {
          prevArray[indexOfDuplicateProduct] = data;
          return prevArray;
        });

        setRows(prevArray => {
          prevArray[indexOfDuplicateProduct] = data;
          return prevArray;
        });
      } else {
        setRows(prevArray => [...prevArray, data]);
        setList(prevArray => [...prevArray, data]);
      }

      setSuccessMsgPopUp(true);
      closeModal();

      setTimeout(() => {
        setSuccessMsgPopUp(false);
      }, 5000);
    } catch (e) {
      if (e instanceof Error && e.message) {
        setFormError(e.message);
      } else {
        setFormError("An Error Occurred");
      }
    } finally {
      setLoading(false);
      formError.includes("An") && setTimeout(() => setFormError(""), 3000);
    }
  };

  const closeModal = () => {
    setNewProduct((prev: ProductType) => ({
      ...prev,
      dimensions: [...newProductObj.dimensions],
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
            {
              <h5>
                {formError
                  ? formError
                  : loading && <LoaderIcon size={25} color="#23D899" />}
              </h5>
            }

            <button className="close-btn" onClick={closeModal}>
              close
            </button>
            <Btn
              text="create product"
              click={() => void addnewProduct()}
              bg={"#23D899"}
            />
          </footer>
        </div>
      </S_AddProductModal>
      {
        <S_SuccessMessageModal popup={successMsgPopUp} success={true}>
          Product Added
        </S_SuccessMessageModal>
      }
    </>
  );
};

export default AddProductModal;

import { memo, useState } from "react";
import { S_deleteProduct } from "./S_deleteProduct";
import { S_container } from "../../../others/reusable-styles/S_container";
import Btn from "../../../others/Btn/Btn";
import { apiRequest } from "../../../../utils";
import { ProductType } from "../../../../ts-types/dataTypes";
import { useRouter } from "next/router";
import { S_successMessageModal } from "../../../others/reusable-styles/S_successMessageModal";
import LoaderIcon from "../../../../assets/icons/LoaderIcon";

const DeleteProduct: React.FC<{ id: string }> = ({ id }) => {
  const [confirmDelete, setConfirmDelete] = useState(false),
    [loading, setLoading] = useState(false),
    [error, setError] = useState(""),
    [deleted, setDeleted] = useState(false),
    router = useRouter(),
    controller = new AbortController();

  const deleteProduct = () => {
    setLoading(true);
    setError("");

    //wrapped in set timeout to help
    //ingnite abortsignal if request is cancelled
    setTimeout(() => {
      void (async () => {
        try {
          const data = await apiRequest(
            "DELETE",
            { id } as ProductType,
            controller.signal
          );

          if (!data) {
            throw new Error("An error occurred");
          }

          setDeleted(true);
          setTimeout(() => void router.push("/"), 1000);
        } catch (e) {
          console.log(e);
          if (e instanceof Error) {
            setError(e.name === "AbortError" ? "" : e.message);
          } else {
            setError("Server Error");
          }
        }
        setLoading(false);
      })();
    }, 2000);
  };

  const cancelDelete = () => {
    controller.abort();
    setConfirmDelete(false);
    setError("");
    setLoading(false);
  };
  return (
    <>
      <S_deleteProduct data-test="delete-product-wrapper">
        <S_container>
          <p className="api-call-info">
            {(!!error && !loading && error) ||
              (loading && <LoaderIcon size={30} color="#23d899" />)}
          </p>
          {confirmDelete ? (
            <div className="confirm-delete">
              <Btn text="CANCEL" click={cancelDelete} />
              <Btn
                text="PROCEED"
                click={() => deleteProduct()}
                bg={"#ab767645"}
              />
            </div>
          ) : (
            <Btn
              text="Delete Product"
              click={() => setConfirmDelete(true)}
              bg={"#ab767645"}
            />
          )}
        </S_container>
      </S_deleteProduct>
      <S_successMessageModal popup={deleted}>
        Product Deleted
      </S_successMessageModal>
    </>
  );
};

export default memo(DeleteProduct);

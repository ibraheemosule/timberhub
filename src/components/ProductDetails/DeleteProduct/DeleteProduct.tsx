import { memo, useState } from "react";
import { S_DeleteProduct } from "./S_DeleteProduct";
import { S_Container } from "../../others/reusable-styles/S_Container";
import Btn from "../../others/Btn/Btn";
import { apiRequest } from "../../../utils";
import { RowItemType } from "../../../ts-types/dataTypes";
import { useRouter } from "next/router";
import { S_SuccessMessageModal } from "../../others/reusable-styles/S_SuccessMessageModal";
import LoaderIcon from "../../../assets/icons/LoaderIcon";

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
            { id } as RowItemType,
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
      <S_DeleteProduct>
        <S_Container>
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
        </S_Container>
      </S_DeleteProduct>
      <S_SuccessMessageModal popup={deleted}>
        Product Deleted
      </S_SuccessMessageModal>
    </>
  );
};

export default memo(DeleteProduct);

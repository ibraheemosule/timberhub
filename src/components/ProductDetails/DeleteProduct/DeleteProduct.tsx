import { memo, useState } from "react";
import { S_DeleteProduct } from "./S_DeleteProduct";
import { S_Container } from "../../others/reusable-styles/S_Container";
import Btn from "../../others/Btn/Btn";

const DeleteProduct: React.FC<{ id: string }> = ({ id }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const deleteProduct = () => {
    console.log("delete");
  };
  return (
    <S_DeleteProduct>
      <S_Container>
        {confirmDelete ? (
          <div className="confirm-delete">
            <Btn text="CANCEL" click={() => setConfirmDelete(false)} />
            <Btn text="PROCEED" click={deleteProduct} bg={"#ab767645"} />
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
  );
};

export default memo(DeleteProduct);

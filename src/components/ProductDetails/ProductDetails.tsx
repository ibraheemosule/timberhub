import { memo } from "react";
import { useRouter } from "next/router";
import { RowItemType } from "../../ts-types/dataTypes";
import Title from "../others/Title/Title";
import Description from "./Description/Description";
import Dimensions from "./Dimensions/Dimensions";
import TopHeader from "../Products/TopHeader/TopHeader";
import DeleteProduct from "./DeleteProduct/DeleteProduct";

const ProductDetails: React.FC<{ data: RowItemType }> = ({ data }) => {
  const router = useRouter();
  const redirectToAllProducts = () => void router.push("/");

  return (
    <div>
      <TopHeader />
      <Title
        title={"Product Details"}
        btnText={"Go  Back"}
        eventHandler={redirectToAllProducts}
      />
      <Description data={data} />
      <Dimensions dimension={data.dimensions} />
      <DeleteProduct id={data.id} />
    </div>
  );
};

export default memo(ProductDetails);

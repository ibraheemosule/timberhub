import { memo } from "react";
import { useRouter } from "next/router";
import { RowItemType } from "../../ts-types/dataTypes";
import Title from "../others/Title/Title";
import Description from "./Description/Description";
import Dimensions from "./Dimensions/Dimensions";

const ProductDetails: React.FC<{ data: RowItemType }> = ({ data }) => {
  const router = useRouter();
  const redirectToAllProducts = () => void router.push("/");

  return (
    <div>
      <Title
        title={"Product Details"}
        btnText={"Go  Back"}
        eventHandler={redirectToAllProducts}
      />
      <Description data={data} />
      <Dimensions dimension={data.dimensions} />
    </div>
  );
};

export default memo(ProductDetails);

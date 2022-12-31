import { memo } from "react";
import { useRouter } from "next/router";
import { ProductType } from "../../../ts-types/dataTypes";
import Title from "../../others/Title/Title";
import Description from "./Description/Description";
import Dimensions from "./Dimensions/Dimensions";
import TopHeader from "../Products/TopHeader/TopHeader";
import DeleteProduct from "./DeleteProduct/DeleteProduct";

const ProductDetails: React.FC<{ data: ProductType }> = ({ data }) => {
  const router = useRouter();
  const redirectToAllProducts = () => void router.push("/");

  return (
    <div data-test="product-details">
      <TopHeader />
      <Title
        title={"Product Details"}
        btnText={"Go  Back"}
        eventHandler={redirectToAllProducts}
      />
      <Description data={data} />
      <Dimensions data={data} />
      <DeleteProduct id={data.id} />
    </div>
  );
};

export default memo(ProductDetails);

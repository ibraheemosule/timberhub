import type { NextPage } from "next";
import dbConnect from "../lib/connectToDB";
import { ProductModel } from "../lib/model";
import { RowItemType } from "../ts-types/dataTypes";
import ProductDetails from "../components/ProductDetails/ProductDetails";

export async function getServerSideProps({ params }: Record<string, any>) {
  const id = params.ProductDetails as string;

  await dbConnect();
  const res = await ProductModel.findById(id).lean({ virtuals: true }).exec();

  return {
    props: {
      data: JSON.parse(JSON.stringify(res)) as RowItemType,
    },
  };
}

const ProductDetailsPage: NextPage<{ data: RowItemType }> = ({ data }) => (
  <ProductDetails data={data} />
);

export default ProductDetailsPage;

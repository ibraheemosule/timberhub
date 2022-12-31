import type { NextPage } from "next";
import dbConnect from "../lib/connectToDB";
import { ProductModel } from "../lib/model";
import { ProductType } from "../ts-types/dataTypes";
import ProductDetails from "../components/page-components/ProductDetails/ProductDetails";

export async function getServerSideProps({ params }: Record<string, any>) {
  const id = params.ProductDetails as string;
  await dbConnect();
  const res = (await ProductModel.findById(id)
    .lean({ virtuals: true })
    .exec()) as unknown as ProductType;

  return {
    props: {
      data: JSON.parse(JSON.stringify(res)) as ProductType,
    },
  };
}

const ProductDetailsPage: NextPage<{ data: ProductType }> = ({ data }) => (
  <ProductDetails data={data} />
);

export default ProductDetailsPage;

import type { NextPage } from "next";
import ContextWrapper from "../components/others/ContextWrapper/ContextWrapper";
import Products from "../components/Products/Products";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import { RowItemType } from "../ts-types/dataTypes";
import dbConnect from "../lib/mongodb";
import { ProductModel } from "../lib/model";

export async function getStaticProps() {
  await dbConnect();
  const res = await ProductModel.find({}).lean({ virtuals: true }).exec();
  console.log(res, "hre");
  return {
    props: {
      data: JSON.parse(JSON.stringify(res)) as RowItemType[],
    },
  };
}

const Home: NextPage<{ data: RowItemType[] }> = ({ data }) => (
  <ContextWrapper fetchedData={data}>
    <>
      <Products />
      <AddProductModal />
    </>
  </ContextWrapper>
);

export default Home;

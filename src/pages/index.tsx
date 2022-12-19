import type { NextPage } from "next";
import ContextWrapper from "../components/others/ContextWrapper/ContextWrapper";
import Products from "../components/Products/Products";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import { Idata, RowItemType } from "../ts-types/dataTypes";
import data from "../../data.json" assert { type: "json" };
import dbConnect from "../lib/mongodb";
import { ProductModel } from "../lib/model";

export async function getStaticProps() {
  await dbConnect();
  const dat = await ProductModel.find({}).lean();
  //console.log(dat);
  // console.log(dat, "here");
  return {
    props: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: JSON.parse(JSON.stringify(dat)),
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

import type { NextPage } from "next";
import ContextWrapper from "../components/others/ContextWrapper/ContextWrapper";
import Products from "../components/Products/Products";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import { Idata } from "../ts-types/dataTypes";
import data from "../../data.json" assert { type: "json" };

export function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}

const Home: NextPage<{ data: Idata }> = ({ data }) => (
  <ContextWrapper fetchedData={data}>
    <>
      <Products />
      <AddProductModal />
    </>
  </ContextWrapper>
);

export default Home;

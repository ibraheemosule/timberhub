import type { NextPage } from "next";
import ContextWrapper from "../components/others/ContextWrapper/ContextWrapper";
import Products from "../components/Products/Products";
import AddProductModal from "../components/AddProductModal/AddProductModal";
import { Idata } from "../ts-types/dataTypes";

const url =
  process.env.NODE_ENV == "development"
    ? "http://localhost:3000"
    : "https://timberhub-task.vercel.app";

export async function getStaticProps() {
  const res = await fetch(`${url}/api/`);
  const { data } = (await res.json()) as { data: Idata };

  return {
    props: {
      data,
    },
  };
}

const Home: NextPage<{ data: Idata }> = ({ data }) => (
  <ContextWrapper fetchedData={data} url={url}>
    <>
      <Products />
      <AddProductModal />
    </>
  </ContextWrapper>
);

export default Home;

import type { NextPage } from "next";
import Layout from "../components/Layout";
import AllProducts from "../components/all-products";
import CreateProduct from "../components/create-product";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <AllProducts />
        <CreateProduct />
      </>
    </Layout>
  );
};

export default Home;

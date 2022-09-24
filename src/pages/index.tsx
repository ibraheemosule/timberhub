import type { NextPage } from "next";
import Navbar from "../components/all-products/Navbar";
import Layout from "../components/Layout";
import ProductHeader from "../components/all-products/ProductHeader";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Navbar />
        <ProductHeader />
      </>
    </Layout>
  );
};

export default Home;

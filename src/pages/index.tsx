import type { NextPage } from "next";
import Navbar from "../components/all-products/Navbar";
import Layout from "../components/Layout";
import ProductHeader from "../components/all-products/ProductHeader";
import SearchBar from "../components/all-products/SeachBar";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Navbar />
        <ProductHeader />
        <SearchBar />
      </>
    </Layout>
  );
};

export default Home;

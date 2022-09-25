import type { NextPage } from "next";
import Layout from "../components/Layout";
import AllProducts from "../components/all-products/Index";

const Home: NextPage = () => {
  return (
    <Layout>
      <AllProducts />
    </Layout>
  );
};

export default Home;

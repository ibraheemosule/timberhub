import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
};

export default Home;

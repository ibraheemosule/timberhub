import type { NextPage } from "next";
import Context from "../components/others/Context/Context";
import Products from "../components/Products/Products";
import AddProductModal from "../components/AddProductModal/AddProductModal";

const Home: NextPage = () => {
  return (
    <Context>
      <>
        <Products />
        <AddProductModal />
      </>
    </Context>
  );
};

export default Home;

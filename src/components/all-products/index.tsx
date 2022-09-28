import Navbar from "./Navbar";
import ProductHeader from "./ProductHeader";
import SearchBar from "./SeachBar";
import ProductList from "./ProductList";
import { useContext } from "react";
import { Context } from "../../assets/utils/Context";

const AllProducts: React.FC = () => {
  const { modal } = useContext(Context);
  return (
    <div style={{ overflow: modal ? "hidden" : "auto" }}>
      <Navbar />
      <ProductHeader />
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default AllProducts;

import TopHeader from "./TopHeader/TopHeader";
import ProductHeader from "./ProductsHeader/ProductsHeader";
import SearchBar from "./SearchBar/SeachBar";
import ProductList from "./ProductsList/ProductsList";
import { useContext } from "react";
import { Context } from "../../utils/Context";

const AllProducts: React.FC = () => {
  const { modal } = useContext(Context);
  return (
    <div style={{ overflow: modal ? "hidden" : "auto" }}>
      <TopHeader />
      <ProductHeader />
      <SearchBar />
      <ProductList />
    </div>
  );
};

export default AllProducts;

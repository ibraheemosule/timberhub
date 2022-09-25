import Navbar from "./Navbar";
import ProductHeader from "./ProductHeader";
import SearchBar from "./SeachBar";
import ProductList from "./ProductList";

const AllProducts: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProductHeader />
      <SearchBar />
      <ProductList />
    </>
  );
};

export default AllProducts;

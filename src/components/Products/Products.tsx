import TopHeader from "./TopHeader/TopHeader";
import Title from "../others/Title/Title";
import SearchBar from "./SearchBar/SeachBar";
import ProductList from "./ProductsList/ProductsList";
import { useContext } from "react";
import { Context } from "../../utils/Context";

const AllProducts: React.FC = () => {
  const { modal, setModal } = useContext(Context);

  const toggleModal = () => {
    document.querySelector(".create-product")?.classList.add("show");
    setModal(true);
  };
  return (
    <div style={{ overflow: modal ? "hidden" : "auto" }}>
      <TopHeader />

      <Title
        title={"All Products"}
        btnText={"+ CREATE PRODUCT"}
        eventHandler={toggleModal}
      />

      <SearchBar />
      <ProductList />
    </div>
  );
};

export default AllProducts;

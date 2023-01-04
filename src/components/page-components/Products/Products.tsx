/* eslint-disable react-hooks/exhaustive-deps */
import TopHeader from "./TopHeader/TopHeader";
import Title from "../../others/Title/Title";
import SearchBar from "./SearchBar/SeachBar";
import ProductList from "./ProductsList/ProductsList";
import Pagination from "./Pagination/Pagination";
import { useContext, useState, useEffect, useRef, useMemo } from "react";
import { Context } from "../../../utils/Context";
import { paginateFunction } from "../../../utils";
import { ProductType } from "../../../ts-types/dataTypes";
import { S_products } from "./S_products";

const AllProducts: React.FC = () => {
  const { modal, setModal, list } = useContext(Context),
    [number, setNumber] = useState(1),
    [productsToShow, setProductsToShow] = useState<ProductType[]>([]),
    parentElement = useRef<HTMLDivElement>(null),
    numOfPages = Math.ceil(list.length / 5);

  useMemo(() => setNumber(1), [JSON.stringify(list)]);

  useEffect(() => {
    if (!parentElement.current) return;
    parentElement.current.scrollTo(0, 0);
  }, [modal]);

  useMemo(() => {
    const paginatedArray = paginateFunction({
      arr: [...list],
      pageSize: 5,
      pageNumber: number,
    });

    setProductsToShow([...paginatedArray]);
  }, [JSON.stringify(list), number]);

  const toggleModal = () => {
    document.querySelector(".create-product")?.classList.add("show");
    setModal(true);
  };
  return (
    <S_products modal={modal} ref={parentElement} data-test="products">
      <TopHeader />

      <Title
        title={"All Products"}
        btnText={"+ CREATE PRODUCT"}
        eventHandler={toggleModal}
      />

      <SearchBar />
      <ProductList paginatedProductArray={productsToShow} />
      <Pagination
        number={number}
        numOfPages={numOfPages}
        setNumber={setNumber}
      />
    </S_products>
  );
};

export default AllProducts;

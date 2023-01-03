import type { NextPage } from "next";
import Head from "next/head";
import ContextWrapper from "../components/others/ContextWrapper/ContextWrapper";
import Products from "../components/page-components/Products/Products";
import AddProductModal from "../components/page-components/Products/AddProductModal/AddProductModal";
import { ProductType } from "../ts-types/dataTypes";
import dbConnect from "../lib/connectToDB";
import { ProductModel } from "../lib/model";

export async function getServerSideProps() {
  await dbConnect();
  const res = await ProductModel.find({})
    .sort({ created: -1 })
    .lean({ virtuals: true })
    .exec();

  return {
    props: {
      data: JSON.parse(JSON.stringify(res)) as ProductType[],
    },
  };
}

const Home: NextPage<{ data: ProductType[] }> = ({ data }) => (
  <ContextWrapper fetchedData={data}>
    <>
      <Head>
        <title>Timberhub Products Page</title>
        <meta name="description" content="Timberhub available wood lists" />
        <meta
          name="keywords"
          content="wood, nature, timber, trees, timberhub, timber processing"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1665858973/Screenshot_2022-10-15_at_7.34.19_PM_tnixkc.png"
        />

        <meta name="twitter:site" content="Timberhub products" />

        <meta name="twitter:title" content="Timberhub products" />
        <meta
          name="twitter:description"
          content="Timberhub available wood products"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1665858973/Screenshot_2022-10-15_at_7.34.19_PM_tnixkc.png"
        />
        <meta property="og:site_name" content="Ibrahim Sule" />

        <meta property="og:title" content="Ibrahim Sule" />

        <meta property="og:url" content="https://timberhub-task.vercel.app" />

        <meta
          property="og:description"
          content="Developer portfolio of Ibrahim Sule"
        />
      </Head>

      <Products />
      <AddProductModal />
    </>
  </ContextWrapper>
);

export default Home;

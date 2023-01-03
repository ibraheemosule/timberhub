import type { NextPage } from "next";
import dbConnect from "../lib/connectToDB";
import { ProductModel } from "../lib/model";
import { ProductType } from "../ts-types/dataTypes";
import ProductDetails from "../components/page-components/ProductDetails/ProductDetails";
import Head from "next/head";
export async function getServerSideProps({ params }: Record<string, any>) {
  const id = params.ProductDetails as string;
  await dbConnect();
  const res = (await ProductModel.findById(id)
    .lean({ virtuals: true })
    .exec()) as unknown as ProductType;

  return {
    props: {
      data: JSON.parse(JSON.stringify(res)) as ProductType,
    },
  };
}

const ProductDetailsPage: NextPage<{ data: ProductType }> = ({ data }) => (
  <>
    <Head>
      <title>Timberhub Product Details</title>
      <meta name="description" content="Timberhub timber information" />
      <meta
        name="keywords"
        content="wood, nature, timber, trees, timberhub, timber processing"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="twitter:image:src"
        content="https://res.cloudinary.com/ibraheemsulay/image/upload/v1665858973/Screenshot_2022-10-15_at_7.34.19_PM_tnixkc.png"
      />

      <meta name="twitter:site" content="Timberhub product details" />

      <meta name="twitter:title" content="Timberhub product details" />
      <meta
        name="twitter:description"
        content="Timberhub available wood product information"
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
    <ProductDetails data={data} />
  </>
);

export default ProductDetailsPage;

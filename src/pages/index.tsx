import Layout from "../components/Layout";
import ProductContainer from "../components/ProductContainer";
import Head from "next/head";

export interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
// write a get server side props function
export async function getServerSideProps() {
  // fetch products from fake store api
  const res: Response = await fetch("https://fakestoreapi.com/products");
  // if the response is ok, return the products
  if (res.ok) {
    const products = await res.json();
    // return the products as props
    return { props: { products } };
  }
}

export default function Homepage({ products }: { products: ProductsType[] }) {
  return (
    <Layout>
      <Head>
        <title>Shop Fashion Products at LOGO</title>
        <meta
          name="description"
          content="Upgrade your wardrobe without breaking the bank. Explore affordable, on-trend styles at LOGO"
        />
      </Head>
      <div className="home">
        <h1 className="">Discover our products</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <ProductContainer products={products} />
    </Layout>
  );
}

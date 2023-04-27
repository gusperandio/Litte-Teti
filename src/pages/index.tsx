import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import CardsList from "@/components/CardsList/CardsList";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    function allProducts() {
      let url = "http://localhost:3334/products";

      axios.get(url).then((e) => {
        setProducts(e.data);
      });
    }

    allProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Little Teti</title>
      </Head>
      <br />
      <main>
        <CardsList products={products ? products : []} />
      </main>

      <Footer />
    </>
  );
}

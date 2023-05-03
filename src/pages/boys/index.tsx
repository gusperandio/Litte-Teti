import CardsList from "@/components/CardsList/CardsList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Boys() {
  const [pBoys, setPBoys] = useState("");

  useEffect(() => {
    function allProducts() {
      let url = "http://localhost:3334/products?girl=false";

      axios.get(url).then((e) => {
        setPBoys(e.data);
      });
    }

    allProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Little Teti - Garotas</title>
      </Head>
      <main>
        <CardsList products={pBoys ? pBoys : []} />
      </main>

      <Footer />
    </>
  );
}

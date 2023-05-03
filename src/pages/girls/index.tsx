import CardsList from "@/components/CardsList/CardsList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Girls() {
  const [pGirls, setPGirls] = useState("");

  useEffect(() => {
    function allProducts() {
      let url = "http://localhost:3334/products?girl=true";

      axios.get(url).then((e) => {
        setPGirls(e.data);
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
        <CardsList products={pGirls ? pGirls : []} />
      </main>

      <Footer />
    </>
  );
}

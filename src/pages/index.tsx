import Card from "@/components/Card/Card";
import Head from "next/head";
import style from "../styles/home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import CardsList from "@/components/CardsList/CardsList";
export default function Home() {
  const logo = () => {
    let result = "";
    let n = parseInt((Math.random() * (4 - 1) + 1).toString(), 10);
    switch (n) {
      case 1:
        result = "/roupa1.jpg";
        break;
      case 2:
        result = "/roupa2.jpg";
        break;
      case 3:
        result = "/roupa3.jpg";
        break;
    }

    return result;
  };

  const arrayEx = [
    {
      card: 1,
      title: "Roupa infantil",
      precoAlt: 88.8,
      preco: 40,
      girl: true,
      image: logo(),
    },
    {
      card: 2,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
      image: logo(),
    },
    {
      card: 3,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
      image: logo(),
    },
    {
      card: 5,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
      image: logo(),
    },
    {
      card: 6,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
      image: logo(),
    },
    {
      card: 7,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
      image: logo(),
    },
    {
      card: 99,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
      image: logo(),
    },
    {
      card: 122,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
      image: logo(),
    },
    {
      card: 153,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 40,
      girl: false,
      image: logo(),
    },
    {
      card: 159,
      title: "Roupa infantil de menino",
      precoAlt: 85.8,
      preco: 39,
      girl: false,
      image: logo(),
    },
  ];

  return (
    <>
      <Head>
        <title>Little Teti</title>
      </Head>
      <br />
      <main>
        <CardsList arrayEx={arrayEx} />
      </main>

      <Footer />
    </>
  );
}

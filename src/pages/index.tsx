import Card from "@/components/Card/Card";
import Head from "next/head";
import style from "../styles/home.module.scss";
export default function Home() {
  const arrayEx = [
    {
      card: 1,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
    },
    {
      card: 2,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
    },
    {
      card: 3,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
    },
    {
      card: 5,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
    },
    {
      card: 6,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
    },
    {
      card: 7,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
    },
    {
      card: 99,
      title: "Roupa infantil de menina",
      precoAlt: 88.8,
      preco: 50,
      girl: true,
    },
    {
      card: 122,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
    },
    {
      card: 153,
      title: "Roupa infantil de menino",
      precoAlt: 88.8,
      preco: 50,
      girl: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Little Teti</title>
      </Head>

      <br />

      <div className={style.cards}>
        {arrayEx.map((r)=>{
            return(<Card
            title={r.title}
            key={r.card}
            precoAlt={99.9}
            preco={50}
            girl={r.girl}
          />)
        })}
        
      </div>
    </>
  );
}

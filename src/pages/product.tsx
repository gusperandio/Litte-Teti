import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";
import Carrousel from "@/components/util/Carousel";
import WhiteDiv from "@/components/util/WhiteDiv";
import { Breadcrumbs, Paper, Typography } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Image from "next/image";
import Link from "next/link";
import Roupa from "../../public/roupa2.jpg";
import styles from "../styles/Product.module.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import MiniCard from "@/components/util/MiniCard";

interface ProdutoProps {
  nome: string;
}
function handleClick() {
  console.log(55 * 9 * 95 - 682 + 7);
}

export default function Product(props: ProdutoProps) {
  const nome = "Litte Teti - ";

  const breadcrumbs = [
    <Link
      key="1"
      className="hover:text-gray-200 text-white no-underline"
      href="/"
    >
      Início
    </Link>,
    <Link
      key="2"
      className="hover:text-gray-200 text-white no-underline"
      href="/girls"
    >
      Meninas
    </Link>,
    <Typography
      key="3"
      color="primary"
      className="underline font-bold text-gray-50 tracking-wider"
    >
      Nome Produto
    </Typography>,
  ];

  const preco = "44.80";
  return (
    <>
      <HeadAuth title={nome} />
      <Navbar />
      <br />
      <div className="sm:ml-56 ml-8">
        <Breadcrumbs
          separator={<NavigateNextRoundedIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="text-white"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <br />
      <div className="mx-10 sm:mx-48">
        <Paper
          elevation={3}
          className="w-full sm:h-80 rounded-md"
          style={{ height: "32rem" }}
        >
          <div className="flex flex-col sm:flex-row">
            <Image
              alt={"roupa"}
              src={"/roupa3.jpg"}
              width={500}
              height={500}
              className="sm:h-96 sm:w-96 rounded-md"
            ></Image>
            <div className="leading-7 text-pink-600 mt-4">
              <div className="flex justify-end mr-8">
                <FavoriteRoundedIcon></FavoriteRoundedIcon>
                <FavoriteBorderRoundedIcon className="text-gray-500"></FavoriteBorderRoundedIcon>
              </div>
              <h3 className="text-2xl font-bold text-center pink">{nome}</h3>
              <h4 className="text-xl font-light text-left ml-8 line-through">
                R$ 44.00
              </h4>
              <h4 className="text-2xl font-bold text-right mt-4 mr-8 pink">
                R$ {preco}
              </h4>
            </div>
          </div>
        </Paper>
        <div className="flex flex-row justify-end mt-16">
          <button className={styles.btn} style={{ marginRight: "1rem" }}>
            <AddShoppingCartRoundedIcon />
          </button>
          <button className={styles.btn}>Comprar</button>
        </div>
        <br />
        <br />
        <br />
        <h1 className="text-white font-extrabold text-2xl pl-3 border-l-4">
          A galera tá de olho
        </h1>
        <br />
        <br />
        <div className="flex flex-row justify-between flex-wrap">
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/maite.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa2.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa3.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa1.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa2.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa3.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa1.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa2.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa3.jpg"/>
          <MiniCard titulo="Roupa Infantil" preco="R$ 75.80" image="/roupa1.jpg"/>
      </div>
      </div>
      <br />
    </>
  );
}

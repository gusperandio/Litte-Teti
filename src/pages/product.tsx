import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";
import Carrousel from "@/components/util/Carousel";
import WhiteDiv from "@/components/util/WhiteDiv";
import { Breadcrumbs, Typography } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Image from "next/image";
import Link from "next/link";
import Roupa from "../../public/roupa2.jpg";
import styles from "../styles/Product.module.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
interface ProdutoProps {
  nome: string;
}
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.log(event);
}

export default function Product(props: ProdutoProps) {
  const nome = "Litte Teti - " + props.nome;

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
      <div className="flex sm:flex-row flex-col justify-start items-start bg-slate-50 rounded-2xl sm:mx-44 mx-12">
        <div className="h-full sm:w-4/12 w-auto">
          {/* <Carrousel /> */}
          <Image
            src={Roupa}
            alt={props.nome}
            className="sm:rounded-l-2xl max-sm:rounded-t-2xl "
          />
        </div>
        <div className="h-full sm:w-8/12 w-full">
          <div className="flex justify-end w-full p-4 sm:p-12">
            <FavoriteBorderRoundedIcon className="text-gray-500 h-8 w-8" />
            <FavoriteRoundedIcon className="pink h-8 w-8" />
          </div>  
          <div className="pl-12 mt-4">
            <h1 className="font-bold">Roupa</h1>

            <h5 className="text-gray-500 font-light">
              {" "}
              Descrição sobre a roupa em poucas palavras
            </h5>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

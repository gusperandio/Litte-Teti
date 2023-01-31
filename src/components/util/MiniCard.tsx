/* eslint-disable react/jsx-key */
import styles from "../../styles/Card.module.css";
import Image from "next/image";
import { IconButton } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import Link from "next/link";
import { ReactElement } from "react";
import { ReactDOM } from "react";
interface CardProps {
  titulo: string;
  image: string;
  preco: string;
}

export default function MiniCard(props: CardProps) {
  return (
    <div className={styles.minicard}>
      <Link href="/product" className="cursor-auto h-40">
        <div className="h-3/5 bg-slate-50 rounded-t-2xl ">
          <Image
            src={props.image}
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-t-2xl"
            priority
          />
          <h5 className="mt-3 text-sm">{props.titulo}</h5>
          <h3 className="text-center mr-2 text-gray-700 text-xl">
            R$ 40.<small>90</small>
          </h3>
        </div>
      </Link>
    </div>
  );
}

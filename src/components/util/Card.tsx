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
  cores: string[];
}

export default function Card(props: CardProps) {


const cor = props.cores.map((corAtual) =>
  <span style={{ backgroundColor: corAtual.toString() }} className="w-4 h-4 rounded-full border border-gray-500"></span>
);

  return (
    <div className="flex justify-between flex-wrap mx-2 lg:mx-12">
      <div className={styles.card}>
        <Link href="/product" className="cursor-auto">
          <div className="w-full sm:h-44 h-36 bg-slate-50 rounded-t-2xl flex justify-center">
            <Image
              src={props.image}
              alt="Picture of the author"
              width={500}
              height={500}
              className="rounded-t-2xl"
              priority
            />
          </div>
          <h5 className="mt-2 sm:mt-1">{props.titulo}</h5>
          <div className="mt-2">
            <div className="flex justify-evenly flex-row " id="cor">
              {cor}
            </div>
            <h5 className="text-left ml-2 text-gray-700 line-through mt-2">
              R$ 40.90
            </h5>
            <h4 className="text-center ml-2 text-gray-700">
              R$ 40.<small>90</small>
            </h4>
          </div>
        </Link>
        <hr className="mx-4" />
        <div>
          <Link href="/product">
            <IconButton color="primary" size="large">
              <input hidden accept="image/*" type="file" />
              <LocalOfferRoundedIcon />
            </IconButton>
          </Link>
          <IconButton color="primary" size="large">
            <input hidden accept="image/*" type="file" />
            <AddShoppingCartRoundedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

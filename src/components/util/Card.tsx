import styles from "../../styles/Card.module.css";
import Image from "next/image";
import { IconButton } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import Link from "next/link";

interface CardProps {
  titulo: string;
  image?: string;
  cores?: string[];
}

export default function Card(props: CardProps) {
  return (
    <div className="flex justify-between flex-wrap mx-2 lg:mx-12">
      <div className={styles.card}>
        <div className="w-full h-52 bg-slate-50 rounded-t-2xl flex justify-center">
          <Image
            src="/Logo.png"
            alt="Picture of the author"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="mt-2">
          <h5>{props.titulo}</h5>
          <h5 className="text-left ml-2 text-gray-700 line-through">
            R$ 40.90
          </h5>
          <h4 className="text-center ml-2 text-gray-700">
            R$ 40.<small>90</small>
          </h4>
        </div>
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

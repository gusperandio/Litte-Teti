import style from "./card.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../../../public/roupa1.jpg";
import Link from "next/link";
interface CardProps {
  title: string;
  preco: number;
  precoAlt: number;
  girl: boolean;
  image: string;
}

export default function Card(props: CardProps) {
  const like = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-heart"
      viewBox="0 0 16 16"
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>
  );

  const fullLike = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );

  const BtnLike = () => {
    return (
      <button
        className="btn btn-sm btn-danger"
        style={{ padding: "6px", width: "1.8rem", height: "1.8rem" }}
      >
        {fullLike}
      </button>
    );
  };

  const BtnDislike = () => {
    return (
      <button
        className="btn btn-sm btn-outline-danger"
        style={{ padding: "6px", width: "1.8rem", height: "1.8rem" }}
      >
        {like}
      </button>
    );
  };

  return (
    <Link href={"product"} style={{ textDecoration: "none" }}>
      <div className={style.card}>
        <Image
          src={props.image}
          width={200}
          height={200}
          alt={props.title}
          priority
          className={style.cardimage}
        />
        <div className={style.cardHome}>
          <div className={style.heading}>
            {props.title}
            <div className={style.author}>R$ {props.precoAlt}</div>
          </div>

          <div className={style.money}>
            {props.girl ? (
              <span className={style.colormoneyGirl}>
                R$ {props.preco}.<small>00</small>
              </span>
            ) : (
              <span className={style.colormoneyBoy}>
                R$ {props.preco}.<small>00</small>
              </span>
            )}
            <BtnDislike />
          </div>
        </div>
      </div>
    </Link>
  );
}

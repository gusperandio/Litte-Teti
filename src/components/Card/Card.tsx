import style from "./card.module.scss";
import { useState, useEffect } from "react";
interface CardProps {
  title: string;
  preco: number;
  precoAlt: number;
  girl: boolean;
}

export default function Card(props: CardProps) {
  return (
    <div className={style.card}>
      <div className={style.cardimage}></div>
      <div className={style.heading}>
        {props.title}
        <div className={style.author}> R$ {props.precoAlt}</div>
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
      </div>
    </div>
  );
}

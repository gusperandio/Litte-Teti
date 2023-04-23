import style from "./cardList.module.scss";
import Card from "../Card/Card";

export default function CardsList(props: any) {
  return (
    <div className={style.cards}>
      {props.arrayEx.map((r: any) => {
        return (
          <Card
            title={r.title}
            key={r.card}
            precoAlt={r.precoAlt}
            preco={r.preco}
            girl={r.girl}
            image={r.image}
          />
        );
      })}
    </div>
  );
}

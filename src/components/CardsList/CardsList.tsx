import style from "./cardList.module.scss";
import Card from "../Card/Card";

export default function CardsList(props: any) {
  // const logo = () => {
  //   let result = "";
  //   let n = parseInt((Math.random() * (4 - 1) + 1).toString(), 10);
  //   switch (n) {
  //     case 1:
  //       result = "/roupa1.jpg";
  //       break;
  //     case 2:
  //       result = "/roupa2.jpg";
  //       break;
  //     case 3:
  //       result = "/roupa3.jpg";
  //       break;
  //   }

  //   return result;
  // };
  
  return (
    <div className={`${style.cards}`}>
    {props.products.map((item: any) => {
       return (
         <Card
           id={item.id}
           title={item.name_product}
           key={item.id}
           precoAlt={item.price_fake}
           preco={item.price}
           girl={item.girl}
           image={item.image[0]}
         />
       );
      })} 
    </div>
  );
}

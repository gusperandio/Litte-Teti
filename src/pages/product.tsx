import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";
import Carrousel from "@/components/util/Carousel";
import WhiteDiv from "@/components/util/WhiteDiv";

import Image from "next/image";

interface ProdutoProps {
  nome?: string;
}

export default function Product(props: ProdutoProps) {
  const nome = "Litte Teti -";
//   var altura = window.screen.height;
// var largura = window.screen.width;
// console.log(altura, largura)
  return (
    <>
      <HeadAuth title={nome} />
      <Navbar />
      <br />
      <WhiteDiv width="90rem" height="500px">
        <div className="flex flex-row justify-start items-start">
          <div style={{width: "500px"}} className="h-full">
            <Carrousel />
          </div>
          <div className="w-6/12 h-full ">
            <h1>Roupa</h1>
          </div>
        </div>
      </WhiteDiv>
      <br />
      <Footer />
    </>
  );
}

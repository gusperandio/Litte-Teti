import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";
import WhiteDiv from "@/components/util/WhiteDiv";

interface ProdutoProps{
    nome?: string;
}

export default function Product(props: ProdutoProps) {

  const nome = "Litte Teti -"

  return (
    <>
      <HeadAuth title={nome} />
      <Navbar />
      <br />
      <WhiteDiv />
      <br />
      <Footer />
    </>
  );
}

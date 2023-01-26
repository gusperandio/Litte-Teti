import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";
import WhiteDiv from "@/components/util/WhiteDiv";

export default function Accessories() {
  return (
    <>
      <HeadAuth title="Little Teti - Meninas"/>
      <Navbar />
      <br/>
      <div className="flex justify-center flex-wrap">
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
        <Card titulo="Roupa Infantil" />
      </div>
      <Footer />
    </>
  );
}

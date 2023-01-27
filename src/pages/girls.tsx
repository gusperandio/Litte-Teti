import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";

export default function Girls() {
  return (
    <>
      <HeadAuth title="Little Teti - Meninas"/>
      <Navbar />
      <br/>
      <div className="flex justify-center flex-wrap">
      <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
        <Card titulo="Roupa Infantil" cores={['blue', 'white', 'dodgerblue']} image="/maite.jpg"/>
      </div>
      <Footer />
    </>
  );
}
import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import Navbar from "@/components/body/Navbar";
import Card from "@/components/util/Card";

export default function Boys() {
  return (
    <>
      <HeadAuth title="Little Teti - Meninas" />
      <Navbar />
      <br />
      <div className="flex justify-center flex-wrap px-16 mt-4">
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
        <Card
          titulo="Roupa Infantil"
          cores={["blue", "white", "dodgerblue"]}
          image="/maite.jpg"
        />
      </div>
      <Footer />
    </>
  );
}

/* eslint-disable @next/next/no-page-custom-font */
import Navbar from "@/components/body/Navbar";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
import HeadAuth from "@/components/body/HeadAuth";
export default function Sobre() {
  return (
    <>
      <HeadAuth title="Little Teti - Sobre" />
      <Navbar />
      <br></br>
      <div className="flex justify-center my-4 text-gray-800 font-semibold">
        <div className={styles.divP}>
          <br />
          <hr className="w-72 border border-gray-800" />
          <Image
            src="/maite.jpg"
            alt="Maite Sperandio"
            width={500}
            height={500}
            priority
            className="px-12 py-2"
          />
          <label className="px-4 text-center lg:px-52">

              Olá mamães e papais, vocês devem estar se perguntando quem somos
              nós e o que significa <span className="pink">Little Teti</span>, não é mesmo? Então bora lá que
              eu te conto!
              <br />
              <br />
              Somos uma loja online de roupas fofolentas e
              estilosas para meninos e meninas, aqui vocês irão encontrar muitas
              modinhas lindas para seus pequenos arrasarem! O nome Little
              Tetti representa minha pequena filha, Maitê. Téti é o apelido
              carinhoso que a chamamos e little significa pequeno(a). Beijinhos da Teti 😘
         
          </label>
          <br />
          <hr className="w-72 border border-gray-800" />
        </div>
      </div>
    </>
  );
}

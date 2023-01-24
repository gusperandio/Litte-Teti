/* eslint-disable @next/next/no-page-custom-font */
import Navbar from "@/components/body/Navbar";
import styles from "../styles/About.module.css";
import Image from "next/image";
import Head from "next/head";
export default function Sobre() {
  return (
    <>
      <Head>
        <title>Little Teti - Sobre</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Navbar />
      <br></br>
      <div className="flex justify-center my-12 text-gray-800 font-semibold">
        <div className={styles.divP}>
          <br />
          Olá, meu nome é Maitê
          <Image
            src="/maite.jpg"
            alt="Maite Sperandio"
            width={500}
            height={500}
            priority
            className="p-12"
          />
          <br />
        </div>
      </div>
    </>
  );
}

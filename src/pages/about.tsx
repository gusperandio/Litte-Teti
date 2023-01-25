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

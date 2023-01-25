/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/body/Navbar";
import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import CardsHome from "@/components/body/CardsHome";

export default function Home() {
  return (
    <>
      <HeadAuth title="Little Teti"/>
      <main className={styles.main}>
        <Navbar />
        <CardsHome />
        <Footer /> 
      </main>
    </>
  );
}

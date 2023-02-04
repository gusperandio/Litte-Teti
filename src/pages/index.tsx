/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/body/Navbar";
import Footer from "@/components/body/Footer";
import HeadAuth from "@/components/body/HeadAuth";
import { IconButton } from "@mui/material";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Card from "../components/util/Card";
import ClearAllRoundedIcon from "@mui/icons-material/ClearAllRounded";
import api from "./api/api";
import * as React from "react";

export default function Home() {
  // const [user, setUser] = React.useState();

  // React.useEffect(() => {
  //   api
  //     .get("/users/gustavofusco")
  //     .then((response) => setUser(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, []);

  return (
    <>
      <HeadAuth title="Little Teti" />
      <main className={styles.main}>
        <Navbar />
        <br />
        <div className="flex justify-end">
          <div className="mr-8 sm:mr-44 bg-slate-100 w-32 flex justify-around rounded-lg opacity-90">
            <IconButton color="primary" size="large">
              <input hidden accept="image/*" type="file" />
              <SearchRoundedIcon />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
              <input hidden accept="image/*" type="file" />
              <AppsRoundedIcon />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
              <input hidden accept="image/*" type="file" />
              <ClearAllRoundedIcon />
            </IconButton>
          </div>
        </div>
        <br />
        <h1 className="text-white font-extrabold text-2xl ml-8 sm:ml-32 pl-3 border-l-4">
          Ultimos lançamentos
        </h1>
        <br />
        <div className="flex justify-center flex-wrap px-16">
          <Card
            titulo="Roupa Infantil"
            cores={["#696969", "dodgerblue", "green"]}
            image="/maite.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa2.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa3.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa1.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa2.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa3.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa1.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa2.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa3.jpg"
          />
          <Card
            titulo="Roupa Infantil"
            cores={["blue", "white", "dodgerblue"]}
            image="/roupa1.jpg"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}

import Head from "next/head";
import style from "./dashboard.module.scss";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Little Teti - Dashboard</title>
      </Head>
      <div className="style.container">
        <h1>Painel</h1>
      </div>
    </>
  );
}

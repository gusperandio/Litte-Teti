import Navbar from "@/components/body/Navbar";
import styles from "../styles/About.module.css";

export default function Sobre() {
  return (
    <>
      <Navbar />
      <br></br>
      <div className="flex justify-center my-24">
        <div className={styles.divP}></div>
      </div>
    </>
  );
}

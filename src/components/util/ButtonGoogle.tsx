import styles from "../../styles/Buttons.module.css";
import Image from "next/image";
export default function ButtonGoogle() {
  return (
    <>
      <div className={styles.googlebtn}>
        <div className={styles.googleiconwrapper}>
          <Image
            className={styles.googleicon}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            width={20}
            height={20}
            alt="Login com Conta google"
          />
        </div>
        <p className={styles.btntext}>
          <b>Entra com Google</b>
        </p>
      </div>
    </>
  );
}

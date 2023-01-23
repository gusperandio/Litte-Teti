import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { LogoWhatsapp } from "react-ionicons";

export default function Footer() {
  return (
    <footer>
      <div className="w-full bg-white h-64 border-t-8 border-cyan-500 text-gray-800">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex justify-center mt-4">
            <Link href="https://www.instagram.com/little_teti/" legacyBehavior>
              <a target="_blank">
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z"></path>
                    </svg>
                  </div>
                  <strong> Instagram</strong>
                  <div className={styles.card__body}>
                    Siga nossa página no instagram para saber das nossas
                    novidades.
                  </div>
                  <span>Sobre</span>
                </div>
              </a>
            </Link>
            <div className={styles.Instabtn}>
              <div className="flex justify-center mt-4 ">
                <Button variant="outlined">Instagram</Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center font-semibold text-center">
            <ul className="list-none">
              <li className="pt-10">
                <Link href="/">Home</Link>
              </li>
              <li className="pt-10">
                <Link href="/about">Sobre</Link>
              </li>
              <li className="pt-10">Contato</li>
            </ul>
          </div>

          <div className="flex justify-center  font-semibold text-center">
            <ul>
              <li className="pt-10">
                Whats App
              </li>
              <li className="pt-10 flex flex-row items-center">
               +55 18 98111-1111
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

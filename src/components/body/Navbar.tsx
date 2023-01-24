/* eslint-disable react/jsx-no-undef */
import { Button } from "@mui/material";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

interface PropsNavbar{
  exibe1?: boolean
  exibe2?: boolean
  exibe3?: boolean
  exibe4?: boolean
  exibe5?: boolean
}

export default function Navbar(props: PropsNavbar) {
  return (
    <header className={styles.menu}>
      <div className="flex flex-row justify-around items-center container mx-auto bg-white rounded-bl-2xl rounded-br-2xl h-44">
        <div>
          <Image
            src="/Logo.png"
            alt="Picture of the author"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="w-3/6 flex flex-row justify-start items-center">
          <Button variant="text" href="/">
            Inicio
          </Button>
          <Button variant="text" className="pink">
            Meninas
          </Button>
          <Button variant="text">Meninos</Button>
          <Button variant="text" className="pink">
            Acessórios
          </Button>
        </div>
        <div>
          <Button variant="contained" href="/login">
            Login
          </Button>
          <Button variant="text" className="pink" href="/login">
            Cadastro
          </Button>
        </div>
      </div>
    </header>
  );
}

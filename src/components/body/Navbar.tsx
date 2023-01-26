/* eslint-disable react/jsx-no-undef */
import { Button } from "@mui/material";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
interface PropsNavbar {
  exibe1?: boolean;
  exibe2?: boolean;
  exibe3?: boolean;
  exibe4?: boolean;
  exibe5?: boolean;
}

export default function Navbar(props: PropsNavbar) {
  return (
    <header>
      <div className={styles.menuMobile}>
        <Button
          variant="outlined"
          className="mt-8 ml-8 w-10 h-10"
          color="inherit"
        >
          <MenuRoundedIcon className="w-8 h-8" />
        </Button>
      </div>

      <div className={styles.menu}>
        <div className="flex flex-row justify-around items-center container mx-auto bg-white rounded-bl-2xl rounded-br-2xl h-44">
          <div>
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Picture of the author"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className="w-3/6 flex flex-row justify-start items-center">
            <Button variant="text" href="/">
              Inicio
            </Button>
            <Button variant="text" className="pink" href="/girls">
              Meninas
            </Button>
            <Button variant="text" href="/boys">
              Meninos
            </Button>
            <Button variant="text" className="pink" href="/accessories">
              Acessórios
            </Button>
          </div>
          <div>
            <Button variant="text" className="pink" href="/login">
              Login
            </Button>
            <Button variant="contained" className="ml-4" href="/register">
              Cadastro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

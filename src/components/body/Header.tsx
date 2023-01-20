/* eslint-disable react/jsx-no-undef */
import { Button } from "@mui/material";
import styles from "../../styles/Header.module.css";
import Image from 'next/image'

export default function Header() {
    
  return (
    <header>
      <div className="flex flex-row justify-between items-center container mx-auto bg-white rounded-bl-2xl rounded-br-2xl h-44">
        <div>
        <Image
        src="/favicon.png"
        alt="Picture of the author"
        width={150}
        height={150}
            />
        </div>
        <div className="w-80 flex flex-row justify-between items-center">
          <Button variant="text">Text</Button>
          <Button variant="text">Text</Button>
          <Button variant="text">Text</Button>
          <Button variant="text">Text</Button>
        </div>
        <div>
          <Button variant="text" color="secondary">Login</Button>
          <Button variant="text" color="secondary">Cadastro</Button>
        </div>
      </div>
    </header>
  );
}

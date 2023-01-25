/* eslint-disable @next/next/no-page-custom-font */
import styles from "../styles/Login.module.css";
import Head from "next/head";
import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import Image from "next/image";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ButtonGoogle from "@/components/util/ButtonGoogle";
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import HeadAuth from "@/components/body/HeadAuth";

const logo = (): string => {
  switch (parseInt((Math.random() * (4 - 1) + 1).toString(), 10)) {
    case 1:
      return "/logo4.png";

    case 2:
      return "/logo2.png";

    case 3:
      return "/logo3.png";

    default:
      return "/logo3.png";
  }
};

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [viewLogo, setLogo] = React.useState(logo());
  //  React.useEffect(() => {
  //    if(!!viewLogo.length) return
  //    setLogo(logo())
  //  }, []);

  // function User({ name }) {
  //   React.useEffect(() => {
  //     document.title = name;
  //   }, [name]);

  //   return <h1>{name}</h1>;
  // }

  return (
    <>
      <HeadAuth title="Little Teti - Login"/>
      <div className="mt-8 ml-4">
        <Button
          variant="outlined"
          href="/"
          startIcon={<ArrowBackRoundedIcon />}
          sx={{ m: 1, width: "20ch" }}
          style={{ color: "#fff", border: "1px solid #fff" }}
        >
          Voltar
        </Button>
      </div>
      <div className={styles.divP}>
        <div className="w-9/12 h-10/12 sm:w-5/12 sm:h-3/4 bg-slate-50 rounded-2xl flex justify-start flex-col animate__animated animate__zoomIn">
          <div className="flex justify-center items-center flex-col">
            <div
              style={{ width: "17rem" }}
              className="flex items-center flex-col mt-4"
            >
              <Image
                src={viewLogo.toString()}
                width={150}
                height={150}
                alt="Página de login"
              ></Image>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                placeholder="exemplo@email.com"
                sx={{ m: 1, width: "25ch" }}
                className="mt-4"
              />
              <br />
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Senha
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Senha"
                  placeholder="**********"
                />
              </FormControl>
              <br />
              <div>
                <ButtonGoogle />
              </div>
              <div className="text-right w-full text-gray-800 underline text-lg mt-8 sm:mr-4 mr-8">
                Esqueci a senha
              </div>
              <div>
                <Button
                  variant="contained"
                  href="/login"
                  endIcon={<LoginTwoToneIcon />}
                  sx={{ m: 1, width: "28ch" }}
                >
                  ENTRAR
                </Button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br/>
        <div>
          <Button
            variant="contained"
            href="/login"
            startIcon={<HowToRegRoundedIcon />}
            sx={{ m: 1, width: "28ch" }}
            color="warning"
          >
            Cadastre-se
          </Button>
        </div>
      </div>
    </>
  );
}

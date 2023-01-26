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

export default function Cadastro() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
              className="flex items-center flex-col mt-8"
            >
                <TextField
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                placeholder="Ex: Maria"
                sx={{ m: 1, width: "25ch" }}
                className="mt-4"
              />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                placeholder="exemplo@email.com"
                sx={{ m: 1, width: "25ch" }}
                className="mt-4"
              />
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
              <TextField
                id="outlined-basic"
                label="Confirmar senha"
                variant="outlined"
                type="password"
                placeholder="**********"
                sx={{ m: 1, width: "25ch" }}
                className="mt-4"
              />
              <br />
              <div>
                <ButtonGoogle />
              </div>
              <br />
              <br />
              <div>
                <Button
                  variant="contained"
                  href="/login"
                  endIcon={<LoginTwoToneIcon />}
                  sx={{ m: 1, width: "28ch" }}
                >
                  Cadastrar
                </Button>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br/>
      </div>
    </>
  );
}

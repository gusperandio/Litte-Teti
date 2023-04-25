import Head from "next/head";
import style from "./login.module.scss";
import { useState } from "react";
import axios from "axios";
import Alert from "@/components/Alert";
export default function Login() {
  const bntGoogle = (text: string) => {
    return (
      <button className={style.btnGoogle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 262"
        >
          <path
            fill="#4285F4"
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
          ></path>
          <path
            fill="#34A853"
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
          ></path>
          <path
            fill="#FBBC05"
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
          ></path>
          <path
            fill="#EB4335"
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
          ></path>
        </svg>
        {text}
      </button>
    );
  };

  const [cadastro, setCadastro] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErroMsg] = useState("");
  let error = false
  async function handleSubmit(event: any) {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:3334/users", newUser)
      .then(function (response) {
        console.log(response, "OK");
      })
      .catch(function (error) {
        setErroMsg(error.response.data.message);
        setTimeout(() => {
            setErroMsg("")
        }, 2500);
      });
  }

  return (
    <>
      <Head>
        <title>Little Teti - Login</title>
      </Head>
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.divTop}>
            <button className="btnPadrao" onClick={() => setCadastro(false)}>
              Login
            </button>
            <button className="btnPadrao" onClick={() => setCadastro(true)}>
              Cadastro
            </button>
          </div>
          <br />
          <br />
          {cadastro ? (
            //FORMULARIO CADASTRO
            <form onSubmit={handleSubmit}>
              <div className={style.input_container}>
                <input
                  placeholder="Nome e Sobrenome"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </span>
              </div>
              <div className={style.input_container}>
                <input
                  placeholder="E-mail"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className={style.input_container}>
                <input
                  placeholder="Senha"
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>
                </span>
              </div>
              <br />
              {errorMsg !== "" ? <p className={style.errorMsg}>{errorMsg}</p> : <></>}
              <button className={style.submit} type="submit" value="Submit">
                Cadastrar
              </button>
              <br />
              <div className="middle">{bntGoogle("Cadastrar com google")}</div>
            </form>
          ) : (
            // FORMULARIO LOGIN
            <form>
              <div className={style.input_container}>
                <input placeholder="E-mail" type="email" required />
                <span>
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className={style.input_container}>
                <input placeholder="Senha" type="password" required />

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                  </svg>
                </span>
              </div>
              <br />
              <p>Esqueci a senha</p>
              <button className={style.submit} type="submit">
                ACESSAR
              </button>
              <br />
              <div className="middle">{bntGoogle("Acessar com google")}</div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

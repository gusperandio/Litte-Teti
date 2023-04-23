import style from "./header.module.scss";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );

  const cartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-cart-plus-fill"
      viewBox="0 0 16 16"
    >
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
    </svg>
  );

  const userIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      className="bi bi-person-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );

  const arrowDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-caret-down"
      viewBox="0 0 16 16"
    >
      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
    </svg>
  );

  return (
    <>
      <div className={style.user}>
        <div style={{ color: "#e91e63" }}>a</div>
        <div>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ display: "flex", alignItems: "center", color: "#fff" }}
          >
            {userIcon} visitante
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">
              Login
            </a>
            <a className="dropdown-item" href="#">
              Cadastrar
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Contato
            </a>
          </div>
        </div>
        <div className={style.cartIcon}>{cartIcon}</div>
      </div>
      <div className={style.frete}>
        <p>
          <span>Frete grátis</span> nas compras acima de R$ 200.00
        </p>
        <p>
          Parcele suas compras em até <span>10x</span>
        </p>
      </div>
      <div className="middle">
        <div className={`${style.header}`}>
          <Link href={"/"}>
            <button className="btn btn-sm btn-primary">Inicio</button>
          </Link>
          <Link href={"/girls"}>
            <button className="btn btn-sm btn-pink">Meninas</button>
          </Link>
          <Link href={"/boys"}>
            <button className="btn btn-sm btn-primary">Meninos</button>
          </Link>
          <Link href={"/contact"}>
            <button className="btn btn-sm btn-outline-success">Contato</button>
          </Link>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ marginTop: "5rem" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Little Teti
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className={style.modalLista}>
                <li className={style.b}>Inicio</li>
                <li className={style.g}>Meninas</li>
                <li className={style.b}>Meninos</li>
                <li className={style.g}>Acessórios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

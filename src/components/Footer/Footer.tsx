import Image from "next/image";
import style from "./footer.module.scss";
import pacote from "../../../public/assets/pacote.png";
import seguro from "../../../public/assets/seguro-de-vida.png";
import suporte from "../../../public/assets/support.png";
import Link from "next/link";
export default function Footer() {
  const pixIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="48"
      height="48"
    >
      <path
        fill="#80DEEA"
        d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z"
      />
    </svg>
  );

  const whatsApp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-whatsapp"
      viewBox="0 0 16 16"
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );

  const email = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-envelope-fill"
      viewBox="0 0 16 16"
    >
      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
    </svg>
  );

  return (
    <div className={style.footer}>
      <div className={style.itens}>
        <div className={style.itemF}>
          <Image
            alt="Frete para compras acima de 200 reais"
            src={pacote}
            priority
            width={48}
            height={48}
          />
          <div className={style.text}>
            <h4>Frete Grátis</h4>
            <p>Frete totalmente grátis para compras acima de R$ 200.00</p>
          </div>
        </div>

        <div className={style.itemF}>
          {pixIcon}
          <div className={style.text}>
            <h4>Pagemento Seguro</h4>
            <p>Pagamentos online, totalmente seguro</p>
          </div>
        </div>

        <div className={style.itemF}>
          <Image
            alt="Suporte online em horario comercial"
            src={suporte}
            priority
            width={48}
            height={48}
          />
          <div className={style.text}>
            <h4>Suporte Rápido</h4>
            <p>Atendimento de seg á sexta 9h às 17h</p>
          </div>
        </div>

        <div className={style.itemF}>
          <Image
            alt="Compra totalmente segura"
            src={seguro}
            priority
            width={48}
            height={48}
          />
          <div className={style.text}>
            <h4>Compra Garantida</h4>
            <p>Pagamentos online, totalmente seguro</p>
          </div>
        </div>
      </div>
      <br />

      <div className={style.footerfooter}>
        <div className={style.contatoBasic}>
          <button className={style.buttonWApp}>
            {whatsApp}&nbsp;(18) 99999-9999
          </button>

          <button className={style.buttonEmail}>
            {email}&nbsp;little_teti@gmail.com
          </button>
          <br />
        </div>

        <br />

        <div className={style.social}>
          <div className={`${style.item} ${style.item1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-tags-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
            </svg>
            <span className={style.quantity}> +30 </span>
            <span className={`${style.text} ${style.text1}`}> Modelos </span>
          </div>
          <div className={`${style.item} ${style.item2}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-bag-check"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <span className={style.quantity}> +200 </span>
            <span className={`${style.text} ${style.text2}`}> Vendas </span>
          </div>
          <div className={`${style.item} ${style.item3}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-diagram-3-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"
              />
            </svg>
            <span className={style.quantity}> +100 </span>
            <span className={`${style.text} ${style.text3}`}> Clientes </span>
          </div>
          <div className={`${style.item} ${style.item4}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-box-arrow-in-up-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.636 13.5a.5.5 0 0 1-.5.5H2.5A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v6.636a.5.5 0 0 1-1 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H6.707l8.147 8.146a.5.5 0 0 1-.708.708L6 6.707V10.5a.5.5 0 0 1-1 0v-5z"
              />
            </svg>
            <span className={style.quantity}> 0 </span>
            <span className={`${style.text} ${style.text4}`}> Devoluções </span>
          </div>
        </div>

        <br />
        <br />
        <div>
          <ul className={style.modalLista}>
            <li className={style.g}><Link href={"/"} style={{textDecoration: "none", color: "inherit"}}>Inicio</Link></li>
            <li className={style.b}><Link href={"/"} style={{textDecoration: "none", color: "inherit"}}>Contato</Link></li>
            <li className={style.g}><Link href={"/"} style={{textDecoration: "none", color: "inherit"}}>Sobre nós</Link></li>
            <li className={style.b}><Link href={"/"} style={{textDecoration: "none", color: "inherit"}}>Privacidade & Segurança</Link></li>
            <li className={style.g}><Link href={"/"} style={{textDecoration: "none", color: "inherit"}}>Termos de serviço</Link></li>
            <li className={style.b}><Link href={"/"} style={{textDecoration: "none", color: "inherit"}}>Perguntas Frequentes</Link></li>
          </ul>
        </div>

        <br />
      </div>
    </div>
  );
}

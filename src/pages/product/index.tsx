import Head from "next/head";
import Image from "next/image";
import style from "./product.module.scss";
import CardsList from "@/components/CardsList/CardsList";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function product() {
  const [product, setProduct] = useState({
    id: "",
    name_product: "",
    price: "",
    price_fake: "",
    amount: "",
    girl: "",
    desc: "",
    active: "",
    createdAt: "",
    updatedAt: "",
    image: [""],
  });
  const [error, setError] = useState("");
  const [footers, setFooter] = useState();
  const router = useRouter();

  useEffect(() => {
    // Assumes a user is already logged in
    let url = `http://localhost:3334/products/${router.query.id}`;
    function productId() {
      axios
        .get(url)
        .then((e) => {
          setProduct(e.data[0]);
        })
        .catch((error) => {
          router.push("/");
        });

      url = `http://localhost:3334/products?girl=false`;
      axios.get(url.replace(`/${router.query.id}`, "?girl=false")).then((e) => {
        setFooter(e.data);
      });
    }
    if (router.query.id) {
      productId();
    }
  }, [router.query.id]);
  
  const BtnBoy = () => {
    return (
      <button className={style.Btn}>
        <svg className={style.Layer} viewBox="0 0 1095.66 1095.63">
          <path
            className={style.cls1}
            d="M1298,749.62c.4,300.41-243,548-548.1,547.9C446.23,1297.4,201.92,1051.2,202.29,749c.37-301.52,244.49-547.41,548.34-547.12C1055.43,202.18,1298.25,449.6,1298,749.62Z"
            transform="translate(-202.29 -201.89)"
          ></path>
          <path
            className={style.cls2}
            d="M1285.89,749.79c-.25,297.07-241.24,535.86-536.12,535.66-296.34-.21-537-241.72-535.29-539,1.68-293.16,240.83-534.18,539.15-532.37C1046.8,215.84,1285.62,453.88,1285.89,749.79Z"
            transform="translate(-202.29 -201.89)"
          ></path>
          <path
            className={style.cls3}
            d="M1195.29,749.56c.54,244.73-198.67,446.2-446.87,445.33C503.27,1194,304,994.53,304.93,748c.91-244.52,199.12-443.08,444.39-443.49C997.43,304,1195.74,505.59,1195.29,749.56Z"
            transform="translate(-202.29 -201.89)"
          ></path>
          <path
            className={style.cls4}
            d="M1097.23,749.87c.22,190.31-154.42,347.43-348,346.92-192-.5-346.48-156.44-346.17-347.7C403.33,558,558.18,402,751.08,402.55,944.62,403.09,1097.69,560.56,1097.23,749.87Z"
            transform="translate(-202.29 -201.89)"
          ></path>
          <path
            className={style.cls5}
            d="M1006.72,744.28c2.81,143.23-110.17,257.35-247.42,261.9C613.15,1011,498.22,895.93,493.71,758.88,488.93,613.71,603,498,740.69,493.28,886.73,488.24,1004,603.87,1006.72,744.28Z"
            transform="translate(-202.29 -201.89)"
          ></path>
          <path
            className={style.cls6}
            d="M607.55,553.77c5.13,3.72,10.28,7.42,15.4,11.15l124.12,90.24a8.57,8.57,0,0,1,1.2.84c1.26,1.27,2.35,1.09,3.77,0,6.36-4.74,12.82-9.35,19.24-14l118.23-85.89c1.07-.78,2.17-1.54,3.28-2.32.82,1.1,0,2-.27,2.77Q866.29,637.48,840,718.38c-1.11,3.42-1.13,3.42,1.81,5.56l136,98.81c1.17.86,2.33,1.74,3.79,2.83-1.48.73-2.79.45-4,.45q-84.07,0-168.16,0h-.73c-3.7,0-3.68,0-4.8,3.43q-26.1,80.4-52.23,160.78c-.4,1.21-.45,2.66-1.77,3.6L735,948.24q-19.34-59.52-38.68-119c-1-3.16-1-3.17-4.6-3.17q-84.27,0-168.53,0a10.57,10.57,0,0,1-4.24-.34,13.17,13.17,0,0,1,3.33-2.77q67.55-49.08,135.1-98.18c5-3.63,4.38-1.8,2.43-7.83q-25.94-80.07-52-160.11c-.3-.91-.57-1.83-.85-2.75Z"
            transform="translate(-202.29 -201.89)"
          ></path>
        </svg>
        <p className={style.text}>Comprar</p>
      </button>
    );
  };

  const BtnGirl = () => {
    return <button className={style.btnGirl}>Comprar</button>;
  };

  return (
    <>
      <div className={`${style.top} middle`}>
        {product.id ? (
          <div className={style.card}>
            <Image
              unoptimized
              src={product.image[0]}
              width={200}
              height={200}
              alt="ok"
              priority
              className={style.cardimg}
            />

            <div className={style.boxText}>
              <h2>{product.name_product}</h2>

              <p className={style.cardp}>R$ {product.price_fake}</p>

              <h3 className={`${style.cardh3} ${style.colormoneyBoy}`}>
                R$ 55.<small>90</small>
              </h3>

              <br />

              <div>
                <p style={{ margin: "0" }}>Tamanhos:</p>
                <div className={style.sizes}>
                  <button className="btn">1</button>
                  <button className="btn">1</button>
                  <button className="btn">1</button>
                  <button className="btn">1</button>
                </div>
              </div>
              <br />
              {product.girl ? <BtnGirl /> : <BtnBoy />}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="middle" style={{ marginTop: "4rem" }}>
        <h2>Veja também: </h2>
      </div>
      <CardsList products={footers ? footers : []} />
      <br />
      <Footer />
    </>
  );
}

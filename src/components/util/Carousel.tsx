import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

 interface PropsCarousel{
    //  images: string[]
    //  fader: boolean
    width: string
    heigth: string
 }

export default function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item >
        <Image src="/roupa2.jpg" alt="Image Two" width={500} height={500} className="rounded-l-2xl"/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/roupa3.jpg" alt="Image Two" width={500} height={500} className="rounded-l-2xl"/>
      </Carousel.Item>
    </Carousel>
  );
}

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
    <Carousel className="rounded-l-2xl">
      <Carousel.Item className="rounded-l-2xl">
        <Image src="/roupa2.jpg" alt="Image Two" width={500} height={500} className="rounded-l-2xl"/>
      </Carousel.Item>
      <Carousel.Item className="rounded-l-2xl">
        <Image src="/roupa3.jpg" alt="Image Two" width={500} height={500} className="rounded-l-2xl"/>
      </Carousel.Item>
    </Carousel>
  );
}

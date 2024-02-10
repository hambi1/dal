"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MainCarousel() {
  let [carousels, setCarousels] = React.useState([
    { id: 1, src: "/banner1.png" },
    { id: 2, src: "/banner2.png" },
    { id: 3, src: "/banner3.png" },
    { id: 4, src: "/banner4.png" },
  ]);
  return (
    <Carousel className="bg-secondary mt-5 rounded-5">
      {carousels.map((e) => (
        <Carousel.Item>
          <Image
            src={e.src}
            width={900}
            height={600}
            className="d-block height-equal"
            alt="carouselImage"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MainCarousel;

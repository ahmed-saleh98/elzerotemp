import React, { useLayoutEffect } from "react";
import { Container } from "react-bootstrap";

import gsap from "gsap";

import Title from "./mainTitle";
import img1 from "../images/features-01.WebP";
import img2 from "../images/features-02.WebP";
import img3 from "../images/features-03.WebP";

const boxes = [
  { name: "quality", image: img1 },
  { name: "time", image: img2 },
  { name: "passion", image: img3 },
];

function Featuers() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".features",
        start: "0% 30%",
        end: "100% 30%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.from([".features .quality", ".features .time", ".features .passion"], {
      opacity: 0,
      rotationY: 90,
      duration: 0.5,
      scale: 0.8,
      stagger: 0.5,
      clearProps: true,
    });
  });
  return (
    <section className="features" id="features">
      <Title>Features</Title>
      <Container>
        {boxes.map((box, index) => (
          <div className={`box ${box.name}`} key={index}>
            <div className="img-holder">
              <img src={box.image} alt="features" />
            </div>
            <h2>{box.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              harum hic veniam eligendi minima
            </p>
            <a href="#more">More</a>
          </div>
        ))}
      </Container>
    </section>
  );
}
export default Featuers;

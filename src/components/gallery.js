import React, { useLayoutEffect } from "react";
import Title from "./mainTitle";
import { Container } from "react-bootstrap";

import gsap from "gsap";
import { fadeIn } from "./articles";

import img1 from "../images/gallery-01.WebP";
import img2 from "../images/gallery-02.WebP";
import img3 from "../images/gallery-03.WebP";
import img4 from "../images/gallery-04.WebP";
import img5 from "../images/gallery-05.WebP";
import img6 from "../images/gallery-06.WebP";

const images = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 40%",
        end: "80% 90%",
        scrub: 3,
      },
    });

    const animation = fadeIn(tl, [".gallery .box"], { y: 150 });
    return () => animation.kill();
  });
  return (
    <section className="gallery" id="gallery">
      <Title>Gallery</Title>
      <Container>
        {images.map((img, index) => (
          <div className="box" key={index}>
            <div className="image">
              <img src={img} alt="gallery" />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
export default Gallery;

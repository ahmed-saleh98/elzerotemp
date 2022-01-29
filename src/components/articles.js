import React, { useLayoutEffect } from "react";
import Title from "./mainTitle";

import { Container } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

import gsap from "gsap";

import img1 from "../images/cat-01.WebP";
import img2 from "../images/cat-02.WebP";
import img3 from "../images/cat-03.WebP";
import img4 from "../images/cat-04.WebP";
import img5 from "../images/cat-05.WebP";
import img6 from "../images/cat-06.WebP";
import img7 from "../images/cat-07.WebP";
import img8 from "../images/cat-08.WebP";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export const fadeIn = (lip, target, vars, start) => {
  lip.from(
    target,
    {
      opacity: 0,
      ...vars,
      duration: 0.5,
      stagger: 0.3,
      clearProps: true,
      ease: "none",
    },
    start
  );
};

function Articles() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".articles ",
        start: "top 40%",
        end: "90% 90%",
        scrub: 3,
      },
    });

    const animation = fadeIn(tl, [".articles .box"], { y: 150 });
    return () => animation.kill();
  }, []);

  return (
    <section className="articles" id="articles">
      <Title>Articles</Title>
      <Container>
        {images.map((img, index) => (
          <div className="box" key={index}>
            <img src={img} alt="articles" />
            <div className="content">
              <h3>Test Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit
              </p>
            </div>
            <div className="info">
              <a href="#more">Read More</a>
              <FaLongArrowAltRight />
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
export default Articles;

import React, { useLayoutEffect } from "react";

import { Container } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";

import Title from "./mainTitle";

import gsap from "gsap";
import { fadeIn } from "./articles";

import img1 from "../images/avatar-01.WebP";
import img2 from "../images/avatar-02.WebP";
import img3 from "../images/avatar-03.WebP";
import img4 from "../images/avatar-04.WebP";
import img5 from "../images/avatar-05.WebP";
import img6 from "../images/avatar-06.WebP";

function Testimonials() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials ",
        start: "top 50%",
        end: "90% 100%",
        scrub: 3,
      },
    });

    const animation = fadeIn(tl, [".testimonials .box"], {
      scale: 0.3,
    });
    return () => animation.kill();
  }, []);
  return (
    <section className="testimonials" id="testimonials">
      <Title>testimonials</Title>
      <Container>
        <div className="box">
          <img src={img1} alt="testimonials" />
          <h3>Mohamed Farag</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaRegStar />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src={img2} alt="testimonials" />
          <h3>Mohamed Ibrahim</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaRegStar />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src={img3} alt="testimonials" />
          <h3>Shady Nabil</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaRegStar />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src={img4} alt="testimonials" />
          <h3>Amr Hendawy</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src={img5} alt="testimonials" />
          <h3>Sherief Ashraf</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaRegStar />
            <FaRegStar />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
        <div className="box">
          <img src={img6} alt="testimonials" />
          <h3>Osama Mohamed</h3>
          <span className="title">Full Stack Developer</span>
          <div className="rate">
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaStar className="filled" />
            <FaRegStar />
            <FaRegStar />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
      </Container>
    </section>
  );
}
export default Testimonials;

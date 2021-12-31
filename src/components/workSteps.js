import React, { useLayoutEffect } from "react";

import gsap from "gsap";

import Title from "./mainTitle";
import { fadeIn } from "./articles";

import { Container } from "react-bootstrap";

import img from "../images/work-steps.WebP";
import img1 from "../images/work-steps-1.WebP";
import img2 from "../images/work-steps-2.WebP";
import img3 from "../images/work-steps-3.WebP";

function WorkSteps() {
  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-steps",
        start: "0% 50%",
        end: "80% 100%",
        scrub: 3,
      },
    });

    const animation1 = fadeIn(tl1, ".work-steps .image", { x: -300 }, "start");
    const animation2 = fadeIn(tl1, [".work-steps .box"], { x: 300 }, "start");
    return () => {
      animation1.kill();
      animation2.kill();
    };
  });

  return (
    <section className="work-steps" id="work-steps">
      <Title>How It Works?</Title>
      <Container>
        <img src={img} alt="work steps" className="image" />
        <div className="info">
          <div className="box">
            <img src={img1} alt="work steps" />
            <div className="text">
              <h3>Business Analysis</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img2} alt="work steps" />
            <div className="text">
              <h3>Architecture</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
          <div className="box">
            <img src={img3} alt="work steps" />
            <div className="text">
              <h3>Developement</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default WorkSteps;

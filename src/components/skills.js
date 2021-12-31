import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import Title from "./mainTitle";
import { fadeIn } from "./articles";

import { Container } from "react-bootstrap";

import img from "../images/skills.WebP";

function Skills() {
  let el = useRef();
  let q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top 50%",
        end: "80% 90%",
        scrub: 3,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills",
        start: "top 50%",
        end: "80% 90%",
        scrub: 3,
      },
    });
    const animation1 = fadeIn(tl1, ".skills img", {
      x: -300,
      scale: 0.3,
      clearProps: true,
    });
    const animation2 = tl2.from([".skill h3 span"], {
      textContent: "0%",
      duration: 1,
      ease: "none",
      snap: { textContent: 1 },
      stagger: 0.2,
    });

    q(".progress span").map((span) =>
      tl1.to(span, {
        width: span.dataset.width,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: 0.3,
      })
    );
    return () => {
      animation1.kill();
      animation2.kill();
    };
  });

  return (
    <section className="skills" id="skills" ref={el}>
      <Title>Our skills</Title>
      <Container>
        <img src={img} alt="skills" />
        <div className="skills-container">
          <div className="skill">
            <h3>
              HTML <span>80%</span>
            </h3>
            <div className="progress">
              <span style={{ width: 0 }} data-width="80%"></span>
            </div>
          </div>
          <div className="skill">
            <h3>
              CSS <span>85%</span>
            </h3>
            <div className="progress">
              <span style={{ width: 0 }} data-width="85%"></span>
            </div>
          </div>
          <div className="skill">
            <h3>
              JavaScript <span>75%</span>
            </h3>
            <div className="progress">
              <span style={{ width: 0 }} data-width="75%"></span>
            </div>
          </div>
          <div className="skill">
            <h3>
              Python <span>80%</span>
            </h3>
            <div className="progress">
              <span style={{ width: 0 }} data-width="80%"></span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Skills;

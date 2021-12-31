import React, { useLayoutEffect } from "react";

import { Container } from "react-bootstrap";

import gsap from "gsap";

import {
  FaRegUser,
  FaCode,
  FaGlobeAfrica,
  FaMoneyBillAlt,
} from "react-icons/fa";

function Stats() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stats",
        start: "top 50%",
        end: "80% 90%",
        toggleActions: "play resume play reverse",
      },
    });

    const animation = tl.from([".stats .number "], {
      textContent: "00",
      duration: 1.5,
      ease: "none",
      snap: { textContent: 1 },
      stagger: 0.1,
    });
    return () => animation.kill();
  });
  return (
    <section className="stats text-center" id="stats">
      <h2>Our Awesome Stats</h2>
      <Container>
        <div className="box">
          <FaRegUser />
          <span className="number">150</span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <FaCode />
          <span className="number">135</span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <FaGlobeAfrica />
          <span className="number">50</span>
          <span className="text">Countries</span>
        </div>
        <div className="box">
          <FaMoneyBillAlt />
          <span className="number">500</span>
          <span className="text">Money</span>
        </div>
      </Container>
    </section>
  );
}
export default Stats;

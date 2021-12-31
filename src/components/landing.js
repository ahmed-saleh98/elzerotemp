import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { Container } from "react-bootstrap";
import landingImg from "../images/landing-image.WebP";
import { FaAngleDoubleDown } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);
function Landing() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const animation = tl
      .to(
        ".text h1",
        {
          text: {
            value: "Alloha There &#128075;,<br> It's AHMED SALEH",
          },
          duration: 1,
          ease: "none",
          delay: 0.3,
        },
        "start"
      )

      .from(".text p", { y: 150, duration: 0.8, stagger: 0.4 }, "start")
      .from(
        ".landing .image",
        {
          x: 200,
          opacity: 0,
          duration: 0.5,
        },
        "start"
      )
      .to(
        ".landing .image",
        {
          y: -50,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "linear",
        },
        "start"
      )
      .to(".go-down", {
        y: -40,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    return () => animation.kill();
  });
  return (
    <section className="landing">
      <Container>
        <div className="text">
          <h1> </h1>
          <div className="p">
            <p>Here Iam gonna share everything about my life.</p>
          </div>
          <div className="p">
            <p>Books Iam reading, Games Iam Playing, Stories and Events</p>
          </div>
        </div>
        <div className="image">
          <img src={landingImg} alt="landing" />
        </div>
      </Container>
      <a href="#articles" className="go-down">
        <FaAngleDoubleDown />
      </a>
    </section>
  );
}
export default Landing;

import React, { useLayoutEffect } from "react";

import Title from "./mainTitle";

import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import gsap from "gsap";
import { fadeIn } from "./articles";

import img1 from "../images/team-01.WebP";
import img2 from "../images/team-02.WebP";
import img3 from "../images/team-03.WebP";
import img4 from "../images/team-04.WebP";
import img5 from "../images/team-05.WebP";
import img6 from "../images/team-06.WebP";
import img7 from "../images/team-07.WebP";
import img8 from "../images/team-08.WebP";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Team() {
  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".team",
        start: "0% 90%",
        end: "80% 100%",
        scrub: 3,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".team",
        start: "0% 90%",
        end: "80% 100%",
        scrub: 3,
      },
    });
    const animation1 = fadeIn(tl1, [".team .box"], { scale: 0.3 });
    const animation2 = fadeIn(tl2, [".team .box img"], { x: -400, delay: 0.2 });
    return () => {
      animation1.kill();
      animation2.kill();
    };
  }, []);

  return (
    <section className="team" id="team">
      <Title>Team Members</Title>
      <Container>
        {images.map((img, index) => (
          <div className="box" key={index}>
            <div className="data">
              <img src={img} alt="team" />
              <div className="social">
                <a href="#social">
                  <FaFacebookF />
                </a>
                <a href="#social">
                  <FaTwitter />
                </a>
                <a href="#social">
                  <FaLinkedinIn />
                </a>
                <a href="#social">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Name</h3>
              <p>Simple Short Description</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
export default Team;

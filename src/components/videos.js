import React, { useLayoutEffect } from "react";

import { Container } from "react-bootstrap";

import Title from "./mainTitle";

import gsap from "gsap";
import { fadeIn } from "./articles";

import img from "../images/video-preview.WebP";

import { FaRandom } from "react-icons/fa";

function Videos() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".videos",
        start: "0% 60%",
        end: "80% 90%",
        scrub: 3,
      },
    });

    const animation1 = fadeIn(tl, ".videos li", { x: -100 });
    const animation2 = fadeIn(
      tl,
      ".videos .preview img",
      {
        y: -800,
      },
      0.8
    );
    return () => {
      animation1.kill();
      animation2.kill();
    };
  });
  return (
    <section className="videos" id="video">
      <Title>Top Videos</Title>
      <Container>
        <div className="holder">
          <div className="list">
            <div className="name">
              Top Videos
              <FaRandom />
            </div>
            <ul>
              <li>
                How To Create Sub Domain<span>05:18</span>
              </li>
              <li>
                Playing With The DNS <span>03:18</span>
              </li>
              <li>
                Everything About The Virtual Hosts <span>05:25</span>
              </li>
              <li>
                How To Monitor Your Website <span>04:16</span>
              </li>
              <li>
                Uncharted Beating The Last Boss <span>07:48</span>
              </li>
              <li>
                Ys Oath In Felghana Overview <span>03:12</span>
              </li>
              <li>
                Ys Series All Games Ending <span>08:10</span>
              </li>
            </ul>
          </div>
          <div className="preview">
            <img src={img} alt="videos" />
            <div className="info">Everything About The Virtual Hosts</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Videos;

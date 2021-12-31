import React, { useLayoutEffect } from "react";

import gsap from "gsap";

import Title from "./mainTitle";
import { fadeIn } from "./articles";

import { Container } from "react-bootstrap";

import {
  FaUserShield,
  FaTools,
  FaMapMarkedAlt,
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
} from "react-icons/fa";

const servicesList = [
  { name: "Security", icon: FaUserShield },
  { name: "Fixing Issues", icon: FaTools },
  { name: "Location", icon: FaMapMarkedAlt },
  { name: "Coding", icon: FaLaptopCode },
  { name: "Design", icon: FaPalette },
  { name: "Marketing", icon: FaBullhorn },
];

function Services() {
  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "80% 90%",
        scrub: 3,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".services",
        start: "top 50%",
        end: "80% 90%",
        scrub: 3,
      },
    });

    const animation1 = fadeIn(tl1, [".services .box"], { scale: 0.3 });
    const animation2 = fadeIn(tl2, [".services .box .info"], {
      y: 200,
      delay: 0.2,
    });

    return () => {
      animation1.kill();
      animation2.kill();
    };
  });

  return (
    <section className="services" id="services">
      <Title>Our Services</Title>
      <Container>
        {servicesList.map((service, index) => (
          <div className="box" key={index}>
            <service.icon />
            <h3>{service.name}</h3>
            <div className="info">
              <a href="#service">Details</a>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
export default Services;

import React, { useLayoutEffect } from "react";

import { Container } from "react-bootstrap";

import Title from "./mainTitle";
import Dots from "./dots";

import gsap from "gsap";
import { fadeIn } from "./articles";

import imgBasic from "../images/hosting-basic.WebP";
import imgAdvanced from "../images/hosting-advanced.WebP";
import imgPro from "../images/hosting-professional.WebP";

import { FaCheck } from "react-icons/fa";

function Pricing() {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pricing",
        start: "0% 30%",
        end: "100% 30%",
        toggleActions: "play reverse play reverse",
      },
    });

    const animation1 = fadeIn(
      tl,
      [".pricing .box"],
      {
        rotationY: 90,
        scale: 0.8,
      },
      "start"
    );
    const animation2 = fadeIn(
      tl,
      [".pricing .dots"],
      { width: 0, height: 0 },
      "start"
    );
    return () => {
      animation1.kill();
      animation2.kill();
    };
  });

  return (
    <section className="pricing" id="pricing">
      <Dots className="dots dots-up" />
      <Dots className="dots dots-down" />
      <Title>Pricing Plans</Title>
      <Container>
        <div className="box">
          <div className="title">Basic</div>
          <img src={imgBasic} alt="basic" />
          <div className="price">
            <span className="amount">$15</span>
            <span className="time">Per Month</span>
          </div>
          <ul>
            <li>
              <FaCheck /> 10GB HDD Space
            </li>
            <li>
              <FaCheck /> 5 Email Addresses
            </li>
            <li>
              <FaCheck /> 2 Subdomains
            </li>
            <li>
              <FaCheck /> 4 Databases
            </li>
            <li>
              <FaCheck /> Basic Support
            </li>
          </ul>
          <a href="#plan">Choose Plan</a>
        </div>
        <div className="box popular">
          <div className="label">Most Popular</div>
          <div className="title">Advanced</div>
          <img src={imgAdvanced} alt="advanced" />
          <div className="price">
            <span className="amount">$25</span>
            <span className="time">Per Month</span>
          </div>
          <ul>
            <li>
              <FaCheck /> 20GB HDD Space
            </li>
            <li>
              <FaCheck /> 10 Email Addresses
            </li>
            <li>
              <FaCheck /> 5 Subdomains
            </li>
            <li>
              <FaCheck /> 8 Databases
            </li>
            <li>
              <FaCheck /> Advanced Support
            </li>
          </ul>
          <a href="#plan">Choose Plan</a>
        </div>
        <div className="box">
          <div className="title">Professional</div>
          <img src={imgPro} alt="proffesinal" />
          <div className="price">
            <span className="amount">$45</span>
            <span className="time">Per Month</span>
          </div>
          <ul>
            <li>
              <FaCheck /> 50GB HDD Space
            </li>
            <li>
              <FaCheck /> 20 Email Addresses
            </li>
            <li>
              <FaCheck /> 10 Subdomains
            </li>
            <li>
              <FaCheck /> 20 Databases
            </li>
            <li>
              <FaCheck /> Professional Support
            </li>
          </ul>
          <a href="#plan">Choose Plan</a>
        </div>
      </Container>
    </section>
  );
}

export default Pricing;

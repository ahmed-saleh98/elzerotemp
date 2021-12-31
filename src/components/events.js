import React, { useLayoutEffect } from "react";

import { Container } from "react-bootstrap";

import Title from "./mainTitle";
import Dots from "./dots";

import gsap from "gsap";
import { fadeIn } from "./articles";

import img from "../images/events.WebP";

function Events() {
  useLayoutEffect(() => {
    let countDownDate = new Date("Mar 1, 2023 00:00:00").getTime();
    // make CountDown Timer

    let counter = setInterval(() => {
      let currDate = new Date().getTime();
      let dateDiff = countDownDate - currDate;

      // Time units
      let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

      document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
      document.querySelector(".hours").innerHTML =
        hours < 10 ? `0${hours}` : hours;
      document.querySelector(".minutes").innerHTML =
        minutes < 10 ? `0${minutes}` : minutes;
      document.querySelector(".seconds").innerHTML =
        seconds < 10 ? `0${seconds}` : seconds;

      if (dateDiff < 0) {
        clearInterval(counter);
      }
    }, 1000);

    // animatons
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".events",
        start: "0% 50%",
        end: "90% 100%",
        scrub: 3,
      },
    });

    const animation1 = fadeIn(tl, ".events img", { scale: 0.3 }, "start");
    const animation2 = fadeIn(tl, [".events .unit"], { scale: 0.3 }, "start");
    const animation3 = tl.to(".events .title", {
      text: { value: "Tech Masters Event 2023" },
      duration: 1,
    });
    const animation4 = tl.to(".events .description", {
      text: {
        value:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro",
      },
      duration: 1,
    });
    const animation5 = fadeIn(tl, ".events .subscribe form", { y: 150 });
    const animation6 = fadeIn(
      tl,
      [".events .dots"],
      { width: 0, height: 0 },
      "start"
    );
    return () => {
      animation1.kill();
      animation2.kill();
      animation3.kill();
      animation4.kill();
      animation5.kill();
      animation6.kill();
    };
  });
  return (
    <section className="events" id="events">
      <Dots className="dots dots-up" />
      <Dots className="dots dots-down" />
      <Title>latest events</Title>
      <Container>
        <img src={img} alt="events" />
        <div className="info">
          <div className="time">
            <div className="unit">
              <span className="days"></span>
              <span>Days</span>
            </div>
            <div className="unit">
              <span className="hours"></span>
              <span>Hours</span>
            </div>
            <div className="unit">
              <span className="minutes"></span>
              <span>Minutes</span>
            </div>
            <div className="unit">
              <span className="seconds"></span>
              <span>Seconds</span>
            </div>
          </div>
          <h2 className="title"> </h2>
          <p className="description"></p>
        </div>
        <div className="subscribe">
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <input type="submit" value="Subscribe" disabled={true} />
          </form>
        </div>
      </Container>
    </section>
  );
}
export default Events;

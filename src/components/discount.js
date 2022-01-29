import React, { useLayoutEffect } from "react";

import gsap from "gsap";
import { fadeIn } from "./articles";

import { Form, FloatingLabel, Button } from "react-bootstrap";

import img from "../images/discount.WebP";
function Discount() {
  useLayoutEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".discount .image",
        start: "top 50%",
        end: "80% 90%",
        scrub: 3,
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".discount .form",
        start: "top 50%",
        end: "80% 90%",
        scrub: 3,
      },
    });

    const animation1 = tl1.from([".discount .image h2", ".discount .image p"], {
      y: 100,
      ease: "none",
      stagger: 0.2,
      clearProps: true,
    });
    const animation2 = fadeIn(tl1, ".discount .image img", { scale: 0.3 });
    const animation3 = fadeIn(
      tl2,
      [
        ".discount .form h2",
        ".discount .form .form-floating",
        ".discount .form button",
      ],
      {
        y: 100,
      }
    );
    return () => {
      animation1.kill();
      animation2.kill();
      animation3.kill();
    };
  }, []);
  return (
    <section className="discount" id="discount">
      <div className="image">
        <div className="content">
          <div className="h2">
            <h2>We Have A Discount</h2>
          </div>
          <div className="p">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Excepturi
              asperiores consectetur, recusandae ratione
            </p>
          </div>
          <div className="p">
            <p>
              provident necessitatibus, cumque delectus commodi fuga praesentium
              beatae.Totam vel similiquelaborum dicta
            </p>
          </div>
          <div className="p">
            <p> aperiam odit doloribus corporis.</p>
          </div>
          <img src={img} alt="discount" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <div className="h2">
            <h2>Request A Discount</h2>
          </div>
          <Form>
            <div className="input">
              <FloatingLabel className="mb-3" label="Your Name">
                <Form.Control type="text" placeholder="Your Name" name="name" />
              </FloatingLabel>
            </div>
            <div className="input">
              <FloatingLabel className="mb-3" label="Your Email">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  name="email"
                />
              </FloatingLabel>
            </div>
            <div className="input">
              <FloatingLabel className="mb-3" label="Your Phone">
                <Form.Control
                  type="phone"
                  placeholder="Your Phone"
                  name="phone"
                />
              </FloatingLabel>
            </div>
            <div className="input">
              <FloatingLabel label="Tell Us About Your Needs" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </div>
            <div className="input">
              <Button disabled type="submit" className="mb-2">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
export default Discount;

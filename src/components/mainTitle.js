import React from "react";

import gsap from "gsap";

function Title({ children }) {
  let tl = gsap.timeline();

  const handleMouseIn = ({ currentTarget }) => {
    let parentClass = currentTarget.parentElement.className;
    let titleBefore = `.${parentClass} .before`;
    let titleAfter = `.${parentClass} .after`;

    tl.to(titleBefore, { left: "0px", duration: 0.2 })
      .to(titleAfter, { right: "0px", duration: 0.2, delay: -0.2 })
      .to([titleBefore, titleAfter], {
        width: "51%",
        height: "100%",
        borderRadius: "0px",
        duration: 0.3,
      });
  };

  const handleMouseOut = ({ currentTarget }) => {
    let parentClass = currentTarget.parentElement.className;
    let titleBefore = `.${parentClass} .before`;
    let titleAfter = `.${parentClass} .after`;

    tl.to([titleBefore, titleAfter], {
      borderRadius: "50%",
      width: "12px",
      height: "12px",
      duration: 0.3,
      clearProps: true,
    })
      .to(titleBefore, { left: "-30px", duration: 0.2, clearProps: true })
      .to(titleAfter, {
        right: "-30px",
        duration: 0.2,
        delay: -0.2,
        clearProps: true,
      });
  };

  return (
    <h2
      className="main-title"
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <span className="before"></span>
      {children}
      <span className="after"></span>
    </h2>
  );
}
export default Title;

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaCodepen,
  FaWhatsapp,
} from "react-icons/fa";

import { HiMail } from "react-icons/hi";

import { Container } from "react-bootstrap";

const MadeBy = () => (
  <section className="made-by">
    <Container>
      <p>Made with &#10084; By Ahmed Saleh</p>
      <div className="socila-links">
        <ul>
          <li>
            <a
              className="facebook"
              target="_blank"
              href="https://www.facebook.com/abusaleh1998"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              className="twitter"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ahmed_saleh_98"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              className="whatsapp"
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=+20 01273698284"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              className="website"
              target="_blank"
              rel="noreferrer"
              href="https://ahmedmsaleh98.wordpress.com"
            >
              <FaGlobe />
            </a>
          </li>
          <li>
            <a
              className="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/ahmed-mo-saleh"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              className="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ahmed-saleh98"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              className="codepen"
              target="_blank"
              rel="noreferrer"
              href="https://codepen.io/ahmed-saleh98"
            >
              <FaCodepen />
            </a>
          </li>
          <li>
            <a
              className="mail"
              target="_blank"
              rel="noreferrer"
              href="mailto:ahmed.mohamed.saleh1998@gmail.com"
            >
              <HiMail />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </section>
);
export default MadeBy;

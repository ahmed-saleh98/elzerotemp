import { Container } from "react-bootstrap";

import MadeBy from "./madeBy";

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaAngleDoubleRight,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneVolume,
} from "react-icons/fa";

import img1 from "../images/gallery-01.WebP";
import img2 from "../images/gallery-02.WebP";
import img3 from "../images/gallery-03.WebP";
import img4 from "../images/gallery-04.WebP";
import img5 from "../images/gallery-05.WebP";
import img6 from "../images/gallery-06.WebP";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="box">
          <h3>Elzero</h3>
          <ul className="social">
            <li>
              <a href="#link" className="facebook">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#link" className="twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#link" className="youtube">
                <FaYoutube />
              </a>
            </li>
          </ul>
          <p className="text">
            this Template was designed by &copy;
            <a href="https://elzero.org/" target="_blank" rel="noreferrer">
              Osama Elzero
            </a>{" "}
            All right reserved
          </p>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <FaAngleDoubleRight /> <a href="#link">Important Link 1</a>
            </li>
            <li>
              <FaAngleDoubleRight /> <a href="#link">Important Link 2</a>
            </li>
            <li>
              <FaAngleDoubleRight /> <a href="#link">Important Link 3</a>
            </li>
            <li>
              <FaAngleDoubleRight /> <a href="#link">Important Link 4</a>
            </li>
            <li>
              <FaAngleDoubleRight /> <a href="#link">Important Link 5</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <FaMapMarkerAlt />
            <div className="info">
              Egypt, Giza, Inside The Sphinx, Room Number 220
            </div>
          </div>
          <div className="line">
            <FaClock />
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div>
          <div className="line">
            <FaPhoneVolume />
            <div className="info">
              <span>+20123456789</span>
              <span>+20198765432</span>
            </div>
          </div>
        </div>
        <div className="box footer-gallery">
          <img src={img1} alt="footer gallery" />
          <img src={img2} alt="footer gallery" />
          <img src={img3} alt="footer gallery" />
          <img src={img4} alt="footer gallery" />
          <img src={img5} alt="footer gallery" />
          <img src={img6} alt="footer gallery" />
        </div>
      </Container>
      <MadeBy />
    </footer>
  );
}

export default Footer;

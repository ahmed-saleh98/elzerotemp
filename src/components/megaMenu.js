import menuImg from "../images/megamenu.WebP";
import {
  FaRegComments,
  FaRegUser,
  FaRegBuilding,
  FaCheckCircle,
  FaRegClipboard,
  FaRegCalendarAlt,
  FaServer,
  FaRegPlayCircle,
  FaRegChartBar,
  FaPercent,
} from "react-icons/fa";

function MeagaMenu() {
  return (
    <div className="mega-menu" id="mega-menu">
      <div className="image">
        <img src={menuImg} alt="menu" />
      </div>
      <ul className="links">
        <li>
          <a href="#testimonials">
            <FaRegComments /> Testimonials
          </a>
        </li>
        <li>
          <a href="#team">
            <FaRegUser /> Team Members
          </a>
        </li>
        <li>
          <a href="#services">
            <FaRegBuilding /> Services
          </a>
        </li>
        <li>
          <a href="#skills">
            <FaCheckCircle /> Our Skills
          </a>
        </li>
        <li>
          <a href="#work-steps">
            <FaRegClipboard /> How It Works
          </a>
        </li>
      </ul>
      <ul className="links">
        <li>
          <a href="#events">
            <FaRegCalendarAlt /> Events
          </a>
        </li>
        <li>
          <a href="#pricing">
            <FaServer /> Pricing Plans
          </a>
        </li>
        <li>
          <a href="#video">
            <FaRegPlayCircle /> Top Videos
          </a>
        </li>
        <li>
          <a href="#stats">
            <FaRegChartBar /> Stats
          </a>
        </li>
        <li>
          <a href="#discount">
            <FaPercent /> Request A Discount
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MeagaMenu;

import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../HURAGAN_logo.png";
import { Link } from "react-scroll";

function Navbar() {

  const [ isMobile, setMobile ] = useState(false);
  
  return (
    <div className="navbar">
        <Link to="main" spy={true} smooth={false} offset={0}>
            <img className="logo-img-nav" src={logo} alt="logo" />
        </Link>
        <nav className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to="projects" spy={true} smooth={false} offset={140} onClick={isMobile ? () => setMobile(!isMobile) : null}>
            <p>Projects</p>
          </Link>
          <Link to="about" spy={true} smooth={false} offset={0} onClick={isMobile ? () => setMobile(!isMobile) : null}>
            <p>About</p>
          </Link>
          <Link to="services" spy={true} smooth={false} offset={0} onClick={isMobile ? () => setMobile(!isMobile) : null}>
            <p>Services</p>
          </Link>
          <Link to="contacts" spy={true} smooth={false} offset={0} onClick={isMobile ? () => setMobile(!isMobile) : null}>
            <p>Contacts</p>
          </Link>
        </nav>
        <button className="mobile-menu-icon" onClick={() => setMobile(!isMobile)} >
            {isMobile? <FaTimes/> : <FaBars />}
      </button>
      </div>
   
  );
}

export default Navbar;

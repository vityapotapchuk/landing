import { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../HURAGAN_logo.png";
import { Link } from "react-scroll";

function Navbar() {

  const [ Mobile, setMobile ] = useState(false);
  
  return (
    <div className="navbar">
          <img className="logo-img-nav" src={logo} alt="logo" />
        
        <nav className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to="projects" spy={true} smooth={false} offset={-100}>
            <p>Projects</p>
          </Link>
          <Link to="about" spy={true} smooth={false} offset={100}>
            <p>About</p>
          </Link>
          <Link to="contacts" spy={true} smooth={false} offset={100}>
            <p>Contacts</p>
          </Link>
        </nav>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)} >
          
        <FaBars />
      </button>
      </div>
   
  );
}

export default Navbar;

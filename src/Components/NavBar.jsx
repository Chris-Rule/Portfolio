import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import MenuIcon from "../Icons/Menu";

const Logo = () => {
  return (
    <img
      src={require("../Logos/CRR Logo 1 - PNG.png")}
      height="37.5rem"
      width="37.5rem"
      alt="CRR Logo"
    />
  );
};

const DesktopLinks = () => {
  return (
    <section className="links">
      <Link to="/">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </section>
  );
};

const MobileLinks = () => {
  return <MenuIcon className="burgerMenu" />;
};

const NavBar = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const desktopThreshold = 600;
  if (pageWidth > desktopThreshold) {
    return (
      <section className="NavBar">
        <DesktopLinks />
        <Logo />
      </section>
    );
  } else {
    return (
      <section className="NavBar">
        <MobileLinks />
        <Logo />
      </section>
    );
  }
};

export default NavBar;

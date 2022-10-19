import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import MenuIcon from "../Icons/Menu";
import { useEffect, useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const Logo = () => {
  return <img src={require("../Logos/CRR Logo 1 - PNG.png")} alt="CRR Logo" />;
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
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  if (isSmallScreen) {
    return (
      <section className="NavBar">
        <MobileLinks />
        <Logo />
      </section>
    );
  } else {
    return (
      <section className="NavBar">
        <DesktopLinks />
        <Logo />
      </section>
    );
  }
};

export default NavBar;

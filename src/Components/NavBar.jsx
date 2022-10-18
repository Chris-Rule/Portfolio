import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import MenuIcon from "../Icons/Menu";
import { useEffect, useState } from "react";

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

const useMediaQuery = (queryString) => {
  const [matches, setMatches] = useState(false);

  const changeHandler = (e) => {
    setMatches(e.matches);
  };

  let mql = window.matchMedia(queryString);
  mql.addEventListener("change", changeHandler);

  useEffect(() => {
    console.log(mql);
    console.log(matches);
    return () => mql.removeEventListener("change", changeHandler);
  }, []);

  return matches;
};

const desktopThreshold = 600;

const NavBar = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  console.log({ isSmallScreen });

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

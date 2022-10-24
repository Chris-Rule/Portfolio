import { Link } from "react-router-dom";
import "./NavBar.css";
import useMediaQuery from "../Hooks/useMediaQuery";
import MobileLinks from "./MobileLinks";

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

const NavBar = ({ dropDownVis, setDropDownVis }) => {
  const isSmallScreen = useMediaQuery("(max-width: 700px)");

  if (isSmallScreen) {
    return (
      <section className="NavBar">
        <MobileLinks
          dropDownVis={dropDownVis}
          setDropDownVis={setDropDownVis}
        />
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

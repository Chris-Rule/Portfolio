import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <section>
      <Link to="/">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </section>
  );
};

export default NavBar;

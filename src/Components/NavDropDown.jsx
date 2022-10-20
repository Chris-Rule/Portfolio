import "./NavDropDown.css";
import { Link } from "react-router-dom";

const NavDropDown = ({ dropDownVis, setDropDownVis }) => {
  if (dropDownVis) {
    return (
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  } else {
    return <></>;
  }
};

export default NavDropDown;

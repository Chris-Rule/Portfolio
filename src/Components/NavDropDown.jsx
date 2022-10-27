import "./NavDropDown.css";
import { Link } from "react-router-dom";

const NavDropDown = ({ dropDownVis, setDropDownVis }) => {
  const handleClick = () => {
    setDropDownVis(() => {
      return false;
    });
  };

  if (dropDownVis) {
    return (
      <ul className="NavDropDown">
        <li>
          <Link to="/" onClick={() => handleClick()}>
            About
          </Link>
        </li>
        <li>
          <Link to="/works" onClick={() => handleClick()}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => handleClick()}>
            Contact
          </Link>
        </li>
      </ul>
    );
  } else {
    return <></>;
  }
};

export default NavDropDown;

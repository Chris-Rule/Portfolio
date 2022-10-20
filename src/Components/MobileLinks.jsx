import MenuIcon from "../Icons/Menu";

const MobileLinks = ({ dropDownVis, setDropDownVis }) => {
  const handleClick = () => {
    setDropDownVis((status) => {
      return !status;
    });
  };
  return <MenuIcon className="burgerMenu" onClick={() => handleClick()} />;
};

export default MobileLinks;

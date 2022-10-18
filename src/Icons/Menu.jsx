import * as React from "react";

const MenuIcon = ({
  size = 50,
  strokeWidth = 1.7,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="solid"
    strokeLinejoin="solid"
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.75 5.75h16" />
    <path d="M4.75 18.25h16" />
    <path d="M4.75 12h16" />
  </svg>
);

export default MenuIcon;

import React from "react";

interface NavbarIconProps extends React.SVGProps<SVGSVGElement> {
  isOpen?: boolean;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({
  isOpen = false,
  ...props
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={`transition ${isOpen ? "rotate-180" : ""} ${
        props.className ?? ""
      }`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NavbarIcon;

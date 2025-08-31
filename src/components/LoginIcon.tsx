import React from "react";

const LoginIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.42857 1H11.2857C11.7404 1 12.1764 1.21071 12.4979 1.58579C12.8194 1.96086 13 2.46957 13 3V17C13 17.5304 12.8194 18.0391 12.4979 18.4142C12.1764 18.7893 11.7404 19 11.2857 19H4.42857M9.57143 10L6.14286 6M9.57143 10L6.14286 14M9.57143 10H1"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LoginIcon;

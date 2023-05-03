import React from "react";
import { useLocation } from "react-router-dom";
//import useScrollPosition from "../hooks/useScrollPosition";

function NavButton(props) {
  const { primary, to } = props;

  //const scrollPosition = useScrollPosition();

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const location = useLocation();
  const path = location.pathname;

  return (
    <a
      className={classNames(
        path === to
          ? "text-blue-secondary lg:text-blue-secondary lg:border-blue-secondary border-transparent font-medium"
          : "text-blue-primary border-transparent lg:hover:border-blue-primary",
        "py-2 lg:mx-6 mx-4 transition-all flex items-center text-lg border-b"
      )}
      aria-current="page"
      href={to}
    >
      {primary}
    </a>
  );
}

export default NavButton;

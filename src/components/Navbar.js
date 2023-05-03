import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
import NavButton from "./NavButton";
import { routes } from "./routes";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useScrollPosition();
  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <nav
        className={classNames(
          scrollPosition > 0 ? "shadow-md" : "shadow-none",
          "bg-white fixed w-full py-4 top-0 flex justify-between items-center transition-all z-50"
        )}
      >
        <div className="md:container flex flex-wrap justify-between items-center md:mx-auto w-full">
          <a href="/" className="flex items-center">
            <img
              src="/img/Qpharmacy-Logo.png"
              class="mr-3 w-52"
              alt="QPharmacy Logo"
            />
          </a>
          <button
            data-toggle="navbar"
            onClick={() => setExpanded(!expanded)}
            type="button"
            className="text-blue-primary lg:hidden text-3xl"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <GiHamburgerMenu />
          </button>
          <div
            className={classNames(
              expanded ? "max-h-[220px]" : "max-h-0",
              "block lg:max-h-full w-full lg:w-auto transition-all duration-700 rounded-none md:rounded-2xl overflow-hidden lg:overflow-visible"
            )}
            id="navbar"
          >
            {size.width < 1024 ? (
              <div className="flex flex-col py-4 bg-white">
                <NavButton to="/" primary="Home" />
                <NavButton to="/services" primary="What We Offer" />
                <NavButton to="/plans" primary="Plans" />
                <NavButton to="/contact" primary="Contact Us" />
              </div>
            ) : (
              <ul className="flex flex-row justify-evenly grow rounded-lg">
                <li>
                  <NavButton to="/services" primary="What We Offer" />
                </li>
                <li>
                  <NavButton to="/plans" primary="Plans" />
                </li>
                <li>
                  <NavButton to="/contact" primary="Contact" />
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      {routes()}
    </Fragment>
  );
};

export default Navbar;

import { useLocation } from "react-router-dom";
import { pages } from "./routes";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return pages.some((page) => page.path === pathname) ? (
    <footer className="py-8 mt-auto">
      <div className="container mx-auto">
        <p className="text-center text-black/50 text-sm">All Rights Reserved</p>
      </div>
    </footer>
  ) : null;
};

export default Footer;

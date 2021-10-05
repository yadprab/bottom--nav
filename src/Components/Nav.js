import { AnimateSharedLayout, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { About } from "../Icons/About";
import { Contact } from "../Icons/Contact";
import { Home } from "../Icons/Home";
import { Works } from "../Icons/Works";
import { Back } from "./Back";
function Nav() {
  const { pathname } = useLocation();

  return (
    <>
      <AnimateSharedLayout>
        <motion.nav className="bottom--nav">
          <Link to="/">
            <Home />
            {pathname === "/" && " Home"}
            {pathname === "/" && <Back />}
          </Link>
          <Link to="/about">
            <About />
            {pathname === "/about" && "About"}
            {pathname === "/about" && <Back />}
          </Link>
          <Link to="/work">
            <Works />
            {pathname === "/work" && "Works"}
            {pathname === "/work" && <Back />}
          </Link>
          <Link to="/contact">
            <Contact />
            {pathname === "/contact" && "Contact"}
            {pathname === "/contact" && <Back />}
          </Link>
        </motion.nav>
      </AnimateSharedLayout>
    </>
  );
}

export { Nav };


import { NavLink, useLocation } from "react-router-dom";
import Styles from "./Navigation.module.css";
import logo from "./logo2.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Turn as Hamburger } from "hamburger-react";
import { HiOutlinePhone } from "react-icons/hi";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBar(true);
    }
  }, []);
  const openMenuHandler = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };
  const animateFrom = {
    opacity: 0,
    y: -40,
  };
  const animateto = {
    opacity: 1,
    y: 0,
  };
  const changeBackground = () => {
    if (location.pathname === "/") {
      if (window.scrollY <= 120) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="Zigorat" />
          </NavLink>
        </div>

        {isOpen && (
          <nav className={Styles.nav}>
            <ul>
              <NavLink
                to="/"
                onClick={openMenuHandler}
                className={Styles.NavLink}
              >
                <motion.li
                  animate={animateto}
                  initial={animateFrom}
                  transition={{ delay: 0.05 }}
                >
                  Home
                </motion.li>
              </NavLink>
              <NavLink
                to="/about-us"
                onClick={openMenuHandler}
                className={Styles.NavLink}
              >
                <motion.li
                  animate={animateto}
                  initial={animateFrom}
                  transition={{ delay: 0.1 }}
                >
                  About us
                </motion.li>
              </NavLink>
              <NavLink
                to="/contact-us"
                onClick={openMenuHandler}
                className={Styles.NavLink}
              >
                <motion.li
                  animate={animateto}
                  initial={animateFrom}
                  transition={{ delay: 0.2 }}
                >
                  Contact us
                </motion.li>
              </NavLink>
            </ul>
          </nav>
        )}
        <div className={Styles.iconContainer}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
      </header>
      <header
        className={
          navBar
            ? `${Styles.navContainer} ${Styles.navBarActive}`
            : Styles.navContainer
        }
      >
        <nav className={Styles.desktopNav}>
          <NavLink to="/">
            <img src={logo} alt="logo" className={Styles.logo} />
          </NavLink>
          <ul>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? Styles.activeNavLink : Styles.desktopNavLink
              }
            >
              <li>Contact us</li>
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? Styles.activeNavLink : Styles.desktopNavLink
              }
            >
              <li>About us</li>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? Styles.activeNavLink : Styles.desktopNavLink
              }
            >
              <li>Home</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;

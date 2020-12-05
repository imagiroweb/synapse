import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import './header.css';
import '../assets/css/global.css';
import { useWindowSize } from "../utils/useWindowsHook";

const Header = ({ siteTitle }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const size = useWindowSize();
  const nomadeScreen = size < 1024;
  const { url, alt } = siteTitle;
  const toggleClickMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const linksMenu = () => (
    <ul>
      <li>For professionals</li>
      <li>For telemedicine</li>
      <li>For the general public</li>
    </ul>
  )

  const navMenu = () => {
    return (
      <nav className="header-menu middle-inline">
          {linksMenu()}
      </nav>
    )
  }
  const mobileNav = () => (
    <span className="burger-menu" role="button" onClick={toggleClickMenu} onKeyDown={toggleClickMenu} tabIndex={0}>
      <span className={mobileMenu ? "menu-bar-top show" : "menu-bar-top"}></span>
      <span className={mobileMenu ? "menu-bar-bottom show" : "menu-bar-bottom"}></span>
    </span>
  )
  return (
    <header>
      <div className="wrapper">
          <Link className="middle-inline">
            <img src={url} alt={alt} />
          </Link>
          {!nomadeScreen ?
            navMenu()
          :
            mobileNav()
          }
          {mobileMenu &&
            linksMenu()
          }
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

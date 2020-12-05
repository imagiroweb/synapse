import { Link } from "gatsby";
import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import './header.css';
import '../assets/css/global.css';
import { useWindowSize } from "../utils/useWindowsHook";

const Header = () => {
  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    prismicHeader {
      data {
        logosynapseheader {
          alt
          url
        }
        menunav {
          html
        }
      }
    }
  }
`)
  console.log("Header -> data", data)
  const [mobileMenu, setMobileMenu] = useState(false);
  const size = useWindowSize();
  const nomadeScreen = size < 1024;
  const { url, alt } = data.prismicHeader.data.logosynapseheader;
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
          <Link to='/' className="middle-inline">
            <img src={url} alt={alt} />
          </Link>
          {!nomadeScreen ?
            navMenu()
          :
            mobileNav()
          }
      </div>
      {nomadeScreen &&
            <aside className={mobileMenu ? "show" : ""}>{linksMenu()}</aside>
          }
    </header>
  )
}


export default Header

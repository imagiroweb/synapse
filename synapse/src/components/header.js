import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import './header.css';

const Header = ({ siteTitle }) => {
  const { url, alt } = siteTitle;
  return (
    <header>
          <Link>
            <img src={url} alt={alt} />
          </Link>
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

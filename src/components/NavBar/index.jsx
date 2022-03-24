import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { ReactSVG } from "react-svg";
import SiteLogo from "/assets/images/logos/Phoenix_Homes_logo-white.svg";
import pageLinks from "./pageLinks.json";
import scrollWithOffset from "./offsetPlugin";
import "./index.scss";
import MobileMenu from "./MobileMenu";

const NavBar = ({ colorSet }) => {
  const [showMobileMenu, setShowMobileMenu] = useState();
  return (
    <nav className={`siteNav ${colorSet}`}>
      <div className="content-w">
        <div className="links-wrapper">
          {pageLinks.map(({ name, hash }, i) => (
            <HashLink
              key={i}
              to={`/${hash}`}
              scroll={(el) => scrollWithOffset(el)}
            >
              {name}
            </HashLink>
          ))}
        </div>
        <div className={`site-logo`}>
          <HashLink to="/#">
            <ReactSVG src={SiteLogo} />
          </HashLink>
        </div>
        <div
          className={`hamburgerMenu`}
          onClick={() => setShowMobileMenu(true)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {
          <MobileMenu
            {...{
              pageLinks,
              SiteLogo,
              showMobileMenu,
              setShowMobileMenu,
              scrollWithOffset,
            }}
          />
        }
      </div>
    </nav>
  );
};

export default NavBar;

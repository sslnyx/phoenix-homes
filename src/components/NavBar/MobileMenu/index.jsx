import React from "react";
import { HashLink } from "react-router-hash-link";
import "./index.scss";

const MobileMenu = ({
  pageLinks,
  SiteLogo,
  showMobileMenu,
  setShowMobileMenu,
  scrollWithOffset,
}) => {
  // console.log(SiteLogo);
  return (
    <div className={`mobile-menu ${showMobileMenu ? "activeMobileMenu" : ""}`}>
      <div className="close" onClick={() => setShowMobileMenu(false)}></div>
      <div className="text-center">
        <HashLink to="/#" onClick={() => setShowMobileMenu(false)}>
          <img className="site-logo-m" src={SiteLogo} alt="" />
        </HashLink>
        <ul>
          {pageLinks.map(({ name, hash }, i) => (
            <li key={i} onClick={() => setShowMobileMenu(false)}>
              <HashLink to={`/${hash}`} scroll={(el) => scrollWithOffset(el)}>
                {name}
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

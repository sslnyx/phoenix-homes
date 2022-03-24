import { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./index.scss";
import SiteLogo from "/assets/images/logos/Phoenix_Homes_logo-white.svg";
import { ReactSVG } from "react-svg";

// import SiteLogoBlue from "/src/assets/images/logos/Phoenix_Homes_logo-original.svg";
const SideBar = ({ colorSet, sideMenu }) => {
  // console.log(colorSet);

  const logoRef = useRef();
  return (
    <div className={`content-w-ex ${colorSet}`}>
      <div className={`sidebar `}>
        <div className={`site-logo`}>
          <HashLink to="/#">
            <ReactSVG src={SiteLogo} />
          </HashLink>
        </div>

        <ul className={sideMenu}>
          <li>
            <HashLink to="/#connect">NEWS &amp; UPDATES</HashLink>
          </li>
          <li>
            <HashLink to="/#contact-form">CONTACT US</HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

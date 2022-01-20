import "./index.scss";
import SiteLogo from "/src/assets/images/logos/Phoenix_Homes_logo-white.svg";
import { ReactSVG } from "react-svg";

// import SiteLogoBlue from "/src/assets/images/logos/Phoenix_Homes_logo-original.svg";
const SideBar = () => {
  return (
    <div className="content-w-ex">
      <div className="sidebar">
        <ReactSVG className="site-logo" src={SiteLogo} />
      </div>
    </div>
  );
};

export default SideBar;

import { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const NavBar = () => {
  const pageLinks = [
    {
      name: "Our Legacy",
      hash: "#our-legacy",
    },
    {
      name: "Communities",
      hash: "#communities",
    },
    {
      name: "Homeowner Care",
      hash: "#homeowner-care",
    },
    {
      name: "Stay Connected",
      hash: "#connect",
    },
  ];

  const { hash } = useLocation();

  useEffect(() => {
    // console.log(hash);
  }, [hash]);

  return (
    <nav className="siteNav">
      <div className="content-w">
        <div className="links-wrapper">
          {pageLinks.map(({ name, hash }, i) => (
              <Link key={i} to={{ pathname: "/", hash }}>{name}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

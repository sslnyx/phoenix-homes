import "./index.scss";

const Footer = () => {
  return (
    <footer className="bg-blue">
      <div className="content">
        <h6>Phoenix Homes</h6>

        <div className="address">
          #103 - 12889 84th Ave
          <br />
          Surrey, BC
          <br />
          Canada V3W 0K5
        </div>

        <a className="mb-3" href="mailto:info@phoenixhomesbc.ca">info@phoenixhomesbc.ca</a>

        <div>Copyright {new Date().getFullYear()} Phoenix Homes | All rights Reserved.</div>
      
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import "../styles/header.css";
import logi from "../assets/LOGO.png";

export const Nav = () => {
  return (
    <header className="header">
      <nav className="header-status">
        <div>
          <img className="logi" src={logi} alt="Logo Kasa" />
          {/*<img src={process.env.PUBLIC_URL + "/LOGO.png"} />*/}
        </div>
        <div className="linki">
          <Link to="/" className="navbar-brand spec">
            Home
          </Link>
          <Link to="/about" className="navbar-brand spec">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

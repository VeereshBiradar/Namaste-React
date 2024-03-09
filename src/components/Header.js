import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export const Header = () => {
  const [logButton, setlogButton] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"  src={LOGO_URL} alt="Resturant Header" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className="log-button"
            onClick={() =>
              logButton === "login" ? setlogButton("logout") : "login"
            }
          >
            {logButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

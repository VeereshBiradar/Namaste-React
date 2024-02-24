import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export const Header = () => {
  const [logButton, setlogButton] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Resturant Header" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
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

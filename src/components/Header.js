import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [logButton, setlogButton] = useState("login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-red-400">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Resturant Header" />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="px-4 py-2 bg-green-200 m-4"
            onClick={() =>
              logButton === "login" ? setlogButton("logout") : "login"
            }
          >
            {logButton}
          </button>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

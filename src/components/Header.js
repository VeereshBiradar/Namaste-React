import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [logButton, setlogButton] = useState("login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  //Subscribing to the store using a selector  for a particular portion
  // i want to subscribe to the items

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems)


  return (
    <div className="flex justify-between py-10">
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
          <li className="px-4 font-bold text-xl">
            <Link to='/cart'>Cart ({cartItems.length} items)</Link>
          </li>
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

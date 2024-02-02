import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *   Logo
 *   NavItems
 * Body
 *   Search
 *   ResturantContainer
 *     ResturantCard
 *       Img
 *       Name of the resturant, Star Rating, Cuisins, etc
 * Footer
 *   -Copyright
 *    Links
 *    Address
 *    Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://shorturl.at/btzMR" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
               </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: 'fofofo'
}

const ResturantCard = () => {
    return (
        <div className="resturant-card" style={styleCard}>
            <h3>Meghana Food</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="">
                <ResturantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=> {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);
  

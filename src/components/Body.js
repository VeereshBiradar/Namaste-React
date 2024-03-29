import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constant";
import ShimmerCard from "../components/ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchRestaurantList = async () => {
    const fetchData = await fetch(SWIGGY_API_URL);
    const json = await fetchData.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilterRestaurants(restaurants);
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1>Looks like you're offline !! please check your internet connection</h1>
    )
  }


  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.4
    );
    setFilterRestaurants(filteredList);
  };

  const searchValue = () => {
    const searchResults = listOfRestaurants.filter((res) =>
        res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setFilterRestaurants(searchResults);
  };


  return listOfRestaurants?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <br />
      <div className="filter">
        <div className="search-input">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchValue}>search</button>
        </div>

        <div className="filter__button">
          <button onClick={handleFilterTopRated}>Top Rated Restaurants</button>
        </div>
      </div>
      <br />
      <div className="restaurant__container">
       {filterRestaurants.length === 0 ? (
          <p>No Results Found</p>
        ) : (
          filterRestaurants.map((restaurant) => (
           <Link key={restaurant?.info?.id} to={'/restaurant/'+restaurant?.info?.id}>
            <RestaurantCard {...restaurant?.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

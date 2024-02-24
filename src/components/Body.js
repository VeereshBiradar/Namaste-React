import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constant";
import ShimmerCard from "../components/ShimmerCard";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchRestaurantList = async () => {
    try {
      const fetchData = await fetch(SWIGGY_API_URL);
      const json = await fetchData.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantList();
  }, []);
  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.4
    );
    setListOfRestaurants(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="body">
      <br />
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <br />
      <br />
      <div className="restaurant__container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

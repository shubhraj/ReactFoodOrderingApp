import RestaurantCard, { withPromotedLabel}  from "./RestaurantCard";
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  // Whenever the state variables update,  React triggers the reconciliation cycle ( re-renders the components)

  const [searchText, setSearchText] = useState("");
  const { loggedInUser ,setUserName} = useContext(UserContext);

  const {
    RestaurantList,
    FilteredListOfRestaurants,
    setFilteredListOfRestaurants,
    isLoading,
  } = useRestaurantList();
  // no dependency array it is called on every component render
  // empty Dependency array -> [] -> it will be called only on initial render, so here passing [] as I want the API call on page load only ( just once )


  //Higher Order Function 

  const PromotedRestaurants = withPromotedLabel(RestaurantCard);

  // Conditional rendering
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>looks like you are Offline, please check internet connection... </h1>
    );
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex flex-col md:flex-row md:items-center p-4 md:p-0">
        <div className="search mb-4 md:mb-0 md:mr-4 flex items-center">
          <input
            type="text"
            className="search-box border border-solid border-black px-4 py-2 rounded"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
            onClick={() => {
              const filteredRestaurants = RestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex">
          <button
            className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filteredList = FilteredListOfRestaurants.filter(
                (item) => item.info.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex">
          <label className="pl-12 pr-4">User Name</label>
          <input className="border border-black px-2" onChange={(e) => setUserName(e.target.value)} value={loggedInUser}>
          </input>
        </div>
      </div>

      <div className="res-container flex flex-auto flex-wrap">
        {FilteredListOfRestaurants && FilteredListOfRestaurants.length > 0 ? (
          FilteredListOfRestaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
              >
                { restaurant.info.avgRating < 4 ? (<PromotedRestaurants resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)}                
              </Link>
            );
          })
        ) : (
          <p>Zero Results Found...</p>
        )}
      </div>
    </div>
  );
};

export default BodyComponent;

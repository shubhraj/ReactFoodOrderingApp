
import RestaurantCard from "./RestaurantCard";  
import React, { useState } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const BodyComponent = () => {
    

    // Whenever the state variables update,  React triggers the reconciliation cycle ( re-renders the components) 
    
    const [searchText, setSearchText] = useState("");
    
    const { RestaurantList, FilteredListOfRestaurants, setFilteredListOfRestaurants, isLoading } = useRestaurantList();
    // no dependency array it is called on every component render
    // empty Dependency array -> [] -> it will be called only on initial render, so here passing [] as I want the API call on page load only ( just once )

    // Conditional rendering
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) {
      return <h1>looks like you are Offline, please check internet connection...  </h1>
    }

    if(isLoading) {
      return <Shimmer/>
    }

    return (
      <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" placeholder="search Restaurant" value={searchText}
              // onClick={() => {
              //  here we are restoring the original List on click on input box
              //   setFilteredListOfRestaurants(RestaurantList);
              // }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}/>
              <button onClick={()=> {
                const filteredRestaurants = RestaurantList.filter((res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredListOfRestaurants(filteredRestaurants);    
              }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
               const filteredList = FilteredListOfRestaurants.filter((item) => item.info.avgRating > 4);
               setFilteredListOfRestaurants(filteredList); 
            }}>Top Rated Restaurants </button>
          </div>

          <div className="res-container">
              {    
                   FilteredListOfRestaurants && FilteredListOfRestaurants.length > 0 ? (FilteredListOfRestaurants.map((restaurant) => {
                      return <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard resData = {restaurant}/></Link>
                   }) ) : (
                     <p>Zero Results Found...</p>
                   )                      
              } 
          </div>
      </div>
    )
  }

  export default BodyComponent;
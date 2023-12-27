
import RestaurantCard from "./RestaurantCard";  
import React, { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
    const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.48584596141754&lng=73.95781382918358&page_type=DESKTOP_WEB_LISTING";

    // Whenever the state variables update,  React triggers the reconciliation cycle ( re-renders the components) 
    const [RestaurantList, setRestaurantList] = useState([]);
    const [FilteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // no dependency array it is called on every component render
    // empty Dependency array -> [] -> it will be called only on initial render, so here passing [] as I want the API call on page load only ( just once )
    
    useEffect(()=> {
      fetchData();
    },[]);

    const fetchData = async () => {
      const response = await fetch(SWIGGY_API);
      const data = await response.json();
      //this API data keeps on changing as we are using Swiggy API <this just for learning purpose>
      let apiResData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
      setRestaurantList(apiResData);
      setFilteredListOfRestaurants(apiResData);
    }

    // Conditional rendering
    if(RestaurantList && RestaurantList.length === 0) {
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
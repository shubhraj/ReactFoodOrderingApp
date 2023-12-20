
import RestaurantCard from "./RestaurantCard";  
import React, { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";

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
      let apiResData = data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(apiResData);
      setFilteredListOfRestaurants(apiResData);
    }

    // Conditional rendering
    if(RestaurantList.length === 0) {
      return <Shimmer/>
    }

    return (
      <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" placeholder="search Restaurant" value={searchText}
              // onClick={() => {
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
               const filteredList = RestaurantList.filter((item) => item.info.avgRating > 4);
               setRestaurantList(filteredList); 
            }}>Top Rated Restaurants </button>
          </div>

          <div className="res-container">
              {    
                   FilteredListOfRestaurants.length > 0 ? (FilteredListOfRestaurants.map((restaurant) => {
                      return <RestaurantCard key={restaurant.info.id} resData = {restaurant}/> 
                   }) ) : (
                     <p>Zero Results Found...</p>
                   )                      
              } 
          </div>
      </div>
    )
  }

  export default BodyComponent;
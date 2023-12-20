
import RestaurantCard from "./RestaurantCard";  
import resList from "../utils/mockdata";
import React, { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
    const [RestaurantList, setRestaurantList] = useState([])
    useEffect(()=> {
      fetchData();
    },
    []);

    const fetchData = async () => {
      const response = await fetch(SWIGGY_API);
      const data = await response.json();
      let apiResData = data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurantList(apiResData);
    }

    // Conditional rendering
    if(RestaurantList.length === 0) {
      return <Shimmer/>
    }

    return (
      <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={() => {
               const filteredList = RestaurantList.filter((item) => item.info.avgRating > 4);
               setRestaurantList(filteredList); 
            }}>Top Rated Restaurants </button>
          </div>
          <div className="res-container">
              {   
                   RestaurantList.map((restaurant) => {
                      return <RestaurantCard key={restaurant.info.id} resData = {restaurant}/> 
                   })                       
              } 
          </div>
      </div>
    )
  }

  export default BodyComponent;
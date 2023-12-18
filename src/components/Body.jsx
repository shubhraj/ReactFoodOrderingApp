
import RestaurantCard from "./RestaurantCard";  
import resList from "../utils/mockdata";
import React, { useState } from "react"; 

const BodyComponent = () => {
    const [RestaurantList, setFilteredRestaurantList] = useState(resList)
   
    return (
      <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={() => {
               const filteredList = RestaurantList.filter((item) => item.info.avgRating > 4);
               setFilteredRestaurantList(filteredList); 
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
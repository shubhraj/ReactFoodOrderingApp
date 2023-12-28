import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useRestaurantList = () => {
  const [RestaurantList, setRestaurantList] = useState(null);
  const [FilteredListOfRestaurants, setFilteredListOfRestaurants] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(SWIGGY_API);
      const data = await response.json();
      let apiResData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(apiResData);
      setFilteredListOfRestaurants(apiResData);
      setIsloading(false);
    } catch (error) {
        setIsloading(true);
        console.error("Restaurant Data Fetching failed");
    }
  };

  return {
    RestaurantList,
    FilteredListOfRestaurants,
    setFilteredListOfRestaurants,
    isLoading
  };
};

export default useRestaurantList;

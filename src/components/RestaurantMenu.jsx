import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();  
    
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {   
    const response = await fetch(MENU_API_URL + resId);
    const jsonRes = await response.json();
    const info = jsonRes.data;
    setResInfo(info);
  };

  if(resInfo === null) {
    return <Shimmer />
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info || "";
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div className="menu">
      <h3>{name}</h3>
      <h2>{cuisines.join(", ")}</h2>
      <p>cost for two : {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul> 
        {itemCards.map((item) => {
            return (
                <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            )
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;


/*
  steps : 
  1. first create a dummy markup to return name, and some menu items
  2. think how can we fetch data? -> made use of useEffect() and store the data using useState() hook
  3. meanwhile data is loading we can make use of Shimmer UI
  4. once data is there use it
  4. made use of useParam hook to read params passed to this route
*/

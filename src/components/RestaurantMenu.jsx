import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const {resId} = useParams();  
    
  const resInfo = useRestaurantMenu(resId);

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
        {itemCards && itemCards.map((item) => {
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

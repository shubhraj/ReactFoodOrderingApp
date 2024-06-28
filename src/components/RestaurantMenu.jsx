import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategoy";


import { useState } from "react";

const RestaurantMenu = () => {

  const {resId} = useParams();  
    
  const resInfo = useRestaurantMenu(resId);

  const [openItemIndex, setOpenItemIndex] = useState(1);

  if(resInfo === null) {
    return <Shimmer />
  }

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || "";
  //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  
  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( card => card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  //console.log(category);
  return (
    <div className="menu text-center" >
      <h3 className="font-bold my-6 text-2xl">{name}</h3>
      <p className="font-bold text-lg"> {cuisines?.join(", ")} - {costForTwoMessage}</p>
      {/*category accordion*/}
      {
        category?.map((item, index) => (
            //RestaurantCategory is controlled component as its parent is controlling it using showItem state variable
            <RestaurantCategory 
                key={index} 
                data={item.card?.card} 
                isOpen={index === openItemIndex} 
                setIsOpen={() => {
                  index === openItemIndex ? setOpenItemIndex(null) : setOpenItemIndex(index)
                } }
            />
        ))
      }
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

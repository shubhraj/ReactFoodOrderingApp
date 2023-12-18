
import RestaurantCard from "./RestaurantCard";  
import resList from "../utils/mockdata";

const BodyComponent = () => {
    return (
      <div className="body">
          <div className="search">
            search
          </div>
          <div className="res-container">
              {   
                   resList.map((restaurant) => {
                      return <RestaurantCard key={restaurant.info.id} resData = {restaurant}/> 
                   })                       
              } 
          </div>
      </div>
    )
  }

  export default BodyComponent;
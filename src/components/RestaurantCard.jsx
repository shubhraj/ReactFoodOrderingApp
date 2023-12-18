import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => { 
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} =  props?.resData?.info;
  
    return(
      <div className="res-card">
        <img alt="res-logo" 
        className="res-logo"
        src={CDN_URL + cloudinaryImageId} height={200} width={200}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }

export default RestaurantCard;
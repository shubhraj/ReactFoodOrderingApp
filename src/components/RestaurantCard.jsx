import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => { 
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName} =  props?.resData?.info;
  
    return(
      <div className="res-card p-4 m-4 w-[300px] rounded-lg bg-slate-50  min-h-[36rem] hover:bg-gray-200 ">
        <img alt="res-logo" 
        className="res-logo rounded-lg min-h-60"
        src={CDN_URL + cloudinaryImageId} height={300} width={300} loading="lazy"></img>
        <div className="pt-5">
          <h3 className=" font-bold py-1 text-lg">{name}</h3>
          <h3 className="italic font-thin">{areaName}</h3>
          <h4>{cuisines.join(', ')}</h4>
          <h4>{avgRating} Stars</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    )
  }

  export const withPromotedLabel = () => {
    return (props) => {
      return (
        <div>
         <label className="absolute ml-5 my-2 p-4 bg-gradient-to-r from-black to-gray text-white rounded-lg shadow-lg">Promoted</label>

          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

export default RestaurantCard;
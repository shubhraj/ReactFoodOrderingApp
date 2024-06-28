
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, isOpen, setIsOpen}) => {

   const handleClick = () => {
        setIsOpen(!isOpen);
   }

    return (
       <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 font-bold text-lg"> 
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span> { data.title} ({data.itemCards.length}) </span>
                    <span> {isOpen ? "⬆️" : "⬇️"} </span>
                </div>
                {isOpen && <ItemList items={data.itemCards}/>}
            </div>
        </div> 
    )
}

export default RestaurantCategory;
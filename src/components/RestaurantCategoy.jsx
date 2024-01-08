
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    const [isOpen, setIsOpen] = useState(true);

   const handleClick = () => {
        setShowIndex();
        setIsOpen(!isOpen);
   }

    return (
       <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 font-bold text-lg"> 
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span> { data.title} ({data.itemCards.length}) </span>
                    <span> {showItems ? "⬆️" : "⬇️"} </span>
                </div>
                {(showItems && isOpen) && <ItemList items={data.itemCards}/>}
            </div>
        </div> 
    )
}

export default RestaurantCategory;
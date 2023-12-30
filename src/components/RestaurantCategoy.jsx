
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {


   const handleClick = () => {
        setShowIndex();
   }

    return (
       <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 font-bold text-lg"> 
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span> { data.title} ({data.itemCards.length}) </span>
                    <span> {showItems ? "⬆️" : "⬇️"} </span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div> 
    )
}

export default RestaurantCategory;
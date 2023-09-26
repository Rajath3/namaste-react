import { useState } from "react";
import ItemContainer from "./ItemContainer";

const RestaurantCategory = ({category}) => {
    const [showItem, setShowItem] = useState(false);
    
    const showCard = () => {
        setShowItem(!showItem);
    }
    return (
        <div>
            <div>
                <div  key={category?.card?.card?.title}className="category-container" >
                <div className="w-6/12 bg-gray-100 p-2 m-4 flex justify-between ml-72 " onClick={() => showCard()}>
                    <span className="font-bold">{category?.card?.card?.title} ({category?.card?.card?.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                <div className="ml-72"> 
                    {showItem && <ItemContainer data={category?.card?.card?.itemCards}/>}
                </div>  
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;
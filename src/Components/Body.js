import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";
// Named import, React must be default import
import {useState}from 'react'

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return (
        <div className='body'>
            <div className='filter-container'>
                <button className="filter-btn" 
                onClick={() => {
                    const list = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setlistOfRestaurants(list);
                }}>Top Restaurant Filter</button>
            </div>

            <div className='rest-container'>
                {listOfRestaurants.map((restaurant) => (
                     <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                ))}
               
            </div>
        </div>
    )
}

export default Body;
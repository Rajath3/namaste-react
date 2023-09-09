import RestaurantCard from "./RestaurantCard";
import resList from "../utils/data";

const Body = () => {
    return (
        <div className='body'>
            <div className='search-container'>
                <h5>Search</h5>
            </div>

            <div className='rest-container'>
                {resList.map((restaurant) => (
                     <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                ))}
               
            </div>
        </div>
    )
}

export default Body;
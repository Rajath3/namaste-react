import RestaurantCard from "./RestaurantCard";
// Named import, React must be default import
import {useState, useEffect}from 'react'
import Shimmer from './Shimmer';

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const json = await data.json();

        setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // if (listOfRestaurants.length == 0) {
    //     return (<h1>Loading...</h1>)
    // }

    if (listOfRestaurants.length == 0) {
        return <Shimmer />
    }

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
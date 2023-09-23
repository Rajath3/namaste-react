import RestaurantCard from "./RestaurantCard";
// Named import, React must be default import
import {useState, useEffect}from 'react'
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';

const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData()

        return () => {
            console.log('Unmounting in functional component');
        }
    }, [])

    fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

        const json = await data.json();

        setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // if (listOfRestaurants.length == 0) {
    //     return (<h1>Loading...</h1>)
    // }

    // Conditional Rendering
    // if (listOfRestaurants.length == 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter-container'>
                <div className="search">
                    <input type="text" value={searchValue} onChange={(e) =>{
                      setSearchValue(e.target.value)  
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredResult = listOfRestaurants.filter(
                            (restaurant) => (restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                        )
                        setFilteredRestaurant(filteredResult);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    const list = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setFilteredRestaurant(list);
                }}>Top Restaurant Filter</button>
            </div>

            <div className='rest-container'>
                {filteredRestaurant.map((restaurant) => (
                     <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant.info}/></Link>
                ))}
               
            </div>
        </div>
    )
}

export default Body;
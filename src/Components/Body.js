import RestaurantCard from "./RestaurantCard";
// Named import, React must be default import
import {useState, useEffect}from 'react'
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import { ALL_RESTAURANT_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        const data = await fetch(ALL_RESTAURANT_URL)

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

    const online = useOnlineStatus();

    if (online === false) return <h1>You are offline. Please check your internet connection!</h1>

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='flex justify-center bg-gray-100 sm: bg-white-100'>
                <div className="flex p-10">
                    <input type="text" className="border-2 border-black-400 w-400" value={searchValue} onChange={(e) =>{
                      setSearchValue(e.target.value)  
                    }}/>
                    <button className="p-4 bg-blue-100" onClick={() => {
                        const filteredResult = listOfRestaurants.filter(
                            (restaurant) => (restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                        )
                        setFilteredRestaurant(filteredResult);
                    }}>Search</button>
                </div>
                <div className="flex justify-center">
                <button className="w-[156px] mt-[38px] mb-[35px] bg-yellow-100 border-4 border-black-100" 
                onClick={() => {
                    const list = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setFilteredRestaurant(list);
                }}>Top Restaurant Filter</button>
                </div>
            </div>

            <div className='flex flex-wrap justify-center bg-gray-100'>
                {filteredRestaurant.map((restaurant) => (
                     <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant.info}/></Link>
                ))}
               
            </div>
        </div>
    )
}

export default Body;
import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'

const RestaurantMenu = () => {
    const [menuObj, setMenuObj] = useState(null);
    
    useEffect(() => {
        fetchMenu()
    }, []);

    const { resId } = useParams()

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + resId)

        const res = await data.json()

        setMenuObj(res?.data);
        console.log(res?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    }

    if (menuObj === null) return <Shimmer/>

    const { name, cuisines, avgRating, costForTwoMessage } = menuObj?.cards[0]?.card?.card?.info

    const {itemCards} = menuObj?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>

            <pre>{avgRating} Stars, {costForTwoMessage}</pre>
            {itemCards && itemCards.map((menu) => <h4 key={menu?.card?.info.id}>{menu?.card?.info.name} - Rs. {menu?.card?.info.defaultPrice/100 || menu?.card?.info.finalPrice/100 || menu?.card?.info.price/100 }</h4>)}
            
        </div>
    )
}

export default RestaurantMenu;
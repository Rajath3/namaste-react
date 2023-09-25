import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom'
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    const { resId } = useParams();
    const menuObj = useRestaurantMenu(resId);
   

    if (menuObj === null) return <Shimmer/>

    const { name, cuisines, avgRating, costForTwoMessage } = menuObj?.cards[0]?.card?.card?.info

    const {itemCards} = menuObj?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categoryCards = menuObj?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categoryCards);


    return (
        <div >
            <h1 className="text-center font-bold text-xl p-2 m-2">{name}</h1>
            <h4 className='text-center font-bold text-lg p-1'>{costForTwoMessage}</h4>

            <RestaurantCategory categories={categoryCards}/>

        </div>
    )
}

export default RestaurantMenu;
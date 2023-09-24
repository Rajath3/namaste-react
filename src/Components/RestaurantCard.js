import { FOOD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRatingString, cloudinaryImageId} = props.resData
    
    return (
        <div className='w-56 px-8 py-2 m-2 rounded-2xl hover:bg-gray-300'>
            <img src={FOOD_URL + cloudinaryImageId} className='res-logo' />
            <h3 className="text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
        </div>
    )
}

export default RestaurantCard;
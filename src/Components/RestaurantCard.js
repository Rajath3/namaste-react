import { FOOD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, avgRatingString, cloudinaryImageId} = props.resData
    
    return (
        <div className='rest-card'>
            <img src={FOOD_URL + cloudinaryImageId} className='res-logo' />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
        </div>
    )
}

export default RestaurantCard;
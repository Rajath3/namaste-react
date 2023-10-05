import { addItem } from '../utils/cartSlice';
import {ITEMS_URL} from './../utils/constants';
import { useDispatch } from 'react-redux';

const ItemContainer = ({data}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    
    return (
        <div>
            {data.map((item) => 
                <div data-testid="cartItem" key={item.card.info.name} className="bg-gray-100 p-2 w-8/12 my-2">
                    <img src={ITEMS_URL + item.card.info.imageId} className="w-2/12 float-right rounded-lg"/>
                    <span className='text-black-200 bg-blue-100 rounded p-2 float-right cursor-pointer' onClick={() => handleAddItem(item)}>Add +</span>
                    <h4>{item.card.info.name}</h4>
                    <h5 className='pb-4'>₹ {item.card.info.price/ 100 || item.card.info.defaultPrice/100}</h5>
                    <span className='text-xs'>{item.card.info.description}</span>
                </div>
            )
            }</div>
    )
}

export default ItemContainer;
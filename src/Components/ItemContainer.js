import {ITEMS_URL} from './../utils/constants';

const ItemContainer = ({data}) => {

    return (
        <div>
            {data.map((item) => 
                <div key={item.card.info.id} className="bg-gray-100 p-2 w-8/12 my-2">
                    <img src={ITEMS_URL + item.card.info.imageId} className="w-3/12 float-right"/>
                    <h4>{item.card.info.name}</h4>
                    <h5 className='pb-4'>₹ {item.card.info.defaultPrice/100}</h5>
                    <span className='text-xs'>{item.card.info.description}</span>
                </div>
            )
            }</div>
    )
}

export default ItemContainer;
import {ITEMS_URL} from './../utils/constants';

const ItemContainer = ({data}) => {
    console.log(data);
    return (
        <div>
            {data.map((item) => 
                <div key={item.card.info.name} className="bg-gray-100 p-2 w-8/12 my-2">
                    <img src={ITEMS_URL + item.card.info.imageId} className="w-2/12 float-right rounded-lg"/>
                    <span className='text-black-200 bg-blue-100 rounded p-2 float-right'>Add +</span>
                    <h4>{item.card.info.name}</h4>
                    <h5 className='pb-4'>₹ {item.card.info.price/ 100 || item.card.info.defaultPrice/100}</h5>
                    <span className='text-xs'>{item.card.info.description}</span>
                </div>
            )
            }</div>
    )
}

export default ItemContainer;
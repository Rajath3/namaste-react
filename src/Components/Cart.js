import { clearCart } from "../utils/cartSlice";
import ItemContainer from "./ItemContainer";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
    const items = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center text-lg font-bold m-2 p-2">
            <h1>Cart Items</h1>
            <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClear}>Clear Cart</button>
            <div className="w-10/12 flex ml-80 justify-center">
                <ItemContainer data={items}/>
            </div>
        </div>
    )
}

export default Cart;


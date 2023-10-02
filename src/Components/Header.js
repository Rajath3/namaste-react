import { LOGO_URL } from "../utils/constants";
import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import {useSelector} from 'react-redux';
import appStore from "../utils/appStore";

const Heading = () => {
    const [buttonName, setbuttonName] = useState("login");
    console.log('Rendered everytime something changes')

    const online = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    const itemsAdded = useSelector((store)=> store.cart.items);
    console.log(itemsAdded);

    return (
        <div className='flex justify-between bg-orange-100'> 
            <div className='w-60 items-center'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className="flex">
                <ul className='p-4 m-4 flex items-center'>
                    <li className="px-2">Online: {online ? "🍏" : "🍎"  }</li>
                    <li className="px-2"><Link to='/'>Home</Link></li>
                    <li className="px-2"><Link to='/about'>About Us</Link></li>
                    <li className="px-2"><Link to='/contact'>Contact</Link></li>
                    <li className="px-2"><Link to='/grocery'>Grocery</Link></li>
                    <li className="px-2"><Link to='/cart'>Cart - {itemsAdded.length} items</Link></li>
                    <button className="bg-blue-100 p-2 rounded-lg ml-4" onClick={() => {
                        setbuttonName(buttonName == 'logout' ? 'login' : 'logout');
                    }}>{buttonName}</button>
                    <li className="">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Heading;
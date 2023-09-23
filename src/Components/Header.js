import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {
    const [buttonName, setbuttonName] = useState("login");
    console.log('Rendered everytime something changes')

    const online = useOnlineStatus();

    return (
        <div className='heading'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='navbar-container'>
                <ul className='nav'>
                    <li>Online: {online ? "🍏" : "🍎"  }</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>   
                    <button className="login" onClick={() => {
                        setbuttonName(buttonName == 'logout' ? 'login' : 'logout');
                    }}>{buttonName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Heading;
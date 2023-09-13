import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';

const Heading = () => {
    const [buttonName, setbuttonName] = useState("login");
    console.log('Rendered everytime something changes')

    return (
        <div className='heading'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>

            <div className='navbar-container'>
                <ul className='nav'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
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
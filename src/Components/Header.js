import { LOGO_URL } from "../utils/constants";

const Heading = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Heading;
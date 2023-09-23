import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

/*
This is how custom hook is written in React.
Always use 'use' at starting so that react treats it as hook(convention).
*/
const useRestaurantMenu = (resId) => {
    const [menuObj, setMenuObj] = useState(null);

    useEffect(()=> {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setMenuObj(json.data);
    }

    return menuObj;
}

export default useRestaurantMenu;
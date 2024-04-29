import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null); 

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch(MENU_API_URL + resId);
        //const response = await fetch(MENU_API_URL + "485330");
        const info = await response.json();
        setResInfo(info.data);
    }
    
    return resInfo;
}

export default useRestaurantMenu;
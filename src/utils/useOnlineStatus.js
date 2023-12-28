import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus ] = useState(true);

    useEffect(()=> {
        window.addEventListener("offline", ()=> {
            setOnlineStatus(false);
        })

        window.addEventListener("online", ()=> {
            setOnlineStatus(true);
        })

        return () => {
            // removeEventListener("online");
            // removeEventListener("offline");
        }

    }, [])
    //return boolean
    return onlineStatus;
}

export default useOnlineStatus;
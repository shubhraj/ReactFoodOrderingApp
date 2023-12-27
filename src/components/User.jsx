import  { useEffect, useState } from "react";

const User = ({name}) => {
    let [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    
    useEffect(()=> {
        const timer = setInterval(() => {
            console.log("timer started");
        }, 1000);
        console.log('UseEffect');

        //callbac function to clear the timers, event Listeners    
        return ()=> {
            clearInterval(timer);
        };
    },[])

    return (
        <div className="user-card">
            <h2> count : {count}</h2>
            <h2>Name : {name} </h2>
            <h3>Location : Pune</h3>
            <h4>Contact Me: @shubh_posts</h4>
        </div>
    )
}

export default User;
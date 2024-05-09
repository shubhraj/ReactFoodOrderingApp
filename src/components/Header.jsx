import { LOGO_URL } from "../utils/constants" 
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    //subscirbing to store using Selector
    const cartItems = useSelector((store) => store.cart.items);

    //if no dependency array : it is called on every component render 
    // empty Dependency array -> [] -> it will be called only on initial render ( just once )
    // if dependency array is [btnNameReact] -> useEffect is called everytime btnNameReact changes
    
    useEffect(() => {
      console.log('use Effect called');
    },[btnNameReact]); 
 
    let btnName = "Login";

    const onlineStatus = useOnlineStatus();
    return (
      <div className="header flex justify-between shadow-lg m-1 " >
        <div className="logo-container">
          <img className="logo w-56 min-w-44" src={LOGO_URL} />
        </div> 
  
        <div className="nav-items flex items-center flex-wrap" >
          <ul className="flex p-4 m-4">
            {/* here instead of <a> tag we are using <Link> tag as it wont reload the page but will just rerender the component, due to this we can create SPA */}
             <li className="px-4">Online status : {onlineStatus ? "🟢" : "🔴"}</li>
             <li className="px-4"><Link to="/">Home</Link></li>
             <li className="px-4"><Link to="/about"> About Us </Link></li>
             <li className="px-4"><Link to="/contact"> Contact Us</Link></li>
             <li className="px-4"><Link to="/grocery"> Grocery </Link></li>
             <li className="px-4 font-bold "><Link to="/cart"> Cart (${cartItems.length} items)</Link></li>
             <button className="login-btn" onClick={() => {  
              btnNameReact === "Login" ? setbtnNameReact("Logout") :  setbtnNameReact("Login");
             }}>{btnNameReact}</button>
             <li className="px-4"> {loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }
  
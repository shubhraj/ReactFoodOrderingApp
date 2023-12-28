import { LOGO_URL } from "../utils/constants" 
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    //if no dependency array : it is called on every component render 
    // empty Dependency array -> [] -> it will be called only on initial render ( just once )
    // if dependency array is [btnNameReact] -> useEffect is called everytime btnNameReact changes
    
    useEffect(() => {
      console.log('use Effect called');
    },[btnNameReact]); 
 
    let btnName = "Login";

    const onlineStatus = useOnlineStatus();
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" width="100" height="100" src={LOGO_URL} />
        </div> 
  
        <div className="nav-items">
          <ul>
            {/* here instead of <a> tag we are using <Link> tag as it wont reload the page but will just rerender the component, due to this we can create SPA */}
             <li>Online status : {onlineStatus ? "🟢" : "🔴"}</li>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about"> About Us </Link></li>
             <li><Link to="/contact"> Contact Us</Link></li>
             <li>Cart</li>
             <button className="login-btn" onClick={() => {  
              btnNameReact === "Login" ? setbtnNameReact("Logout") :  setbtnNameReact("Login");
             }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }
  
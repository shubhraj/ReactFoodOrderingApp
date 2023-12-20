import { LOGO_URL } from "../utils/constants" 
import { useState, useEffect } from "react";
export const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    //if no dependency array : it is called on every component render 
    // empty Dependency array -> [] -> it will be called only on initial render ( just once )
    // if dependency array is [btnNameReact] -> useEffect is called everytime btnNameReact changes
    
    useEffect(() => {
      console.log('use Effect called');
    },[btnNameReact]); 
 
    let btnName = "Login";
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" width="100" height="100" src={LOGO_URL} />
        </div> 
  
        <div className="nav-items">
          <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/about"> About Us </a></li>
             <li>Contact Us</li>
             <li>Cart</li>
             <button className="login-btn" onClick={() => {  
              btnNameReact === "Login" ? setbtnNameReact("Logout") :  setbtnNameReact("Login");
             }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }
  
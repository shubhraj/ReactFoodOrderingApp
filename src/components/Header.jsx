import { LOGO_URL } from "../utils/constants" 
import { useState } from "react";
export const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login")
    let btnName = "Login";
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" width="100" height="100" src={LOGO_URL} />
        </div> 
  
        <div className="nav-items">
          <ul>
             <li>Home</li>
             <li>About Us</li>
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
  
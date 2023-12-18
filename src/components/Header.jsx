import { LOGO_URL } from "../utils/constants" 

export const Header = () => {
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
          </ul>
        </div>
      </div>
    )
  }
  
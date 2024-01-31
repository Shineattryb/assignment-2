import React from 'react';
import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
function Navbar({cartcount}) {
  return (
    <div className="nav-bar">
      <nav>
        

      <div className="icon-right">
      <FaShoppingCart  className='icon-2'/>
      {cartcount >0 && <span className='cart-count'>{cartcount}</span>}
      </div>
    
      </nav>
    </div>
  )
}

export default Navbar;

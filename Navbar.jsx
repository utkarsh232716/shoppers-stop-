import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("Shop");

  const {getTotalCartItems} =useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to='/'><img onClick={()=>{setMenu("Shop")}} src={logo} alt="" /></Link>
        <p onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>SHOPPER</Link></p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration: 'none'}}  to='/Mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration: 'none'}}  to='/Womens'>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}}  to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

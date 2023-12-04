import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const [btnName,setBtnName] = useState("login")
  return (
      <section>
    

          <div className= 'navbar'>
              <ul>
                  <li>Home</li>
                  <li>
                      <Link to="/about">About </Link>
                  </li>
                  <li>Contact</li>
                  <li> cart</li>
                  <button className='nav-btn' onClick ={()=>{setBtnName("logOut")}}>{ btnName}</button>
              </ul>
          </div>
    
    </section>
  )
}

export default Navbar

import React from 'react'
import { ROUTE_PATH } from '../../Routes';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navlbar2() {
  

  return (
   <>
    <div className="navbar_main">
        <p className="navbar_logo">Analytics Dashboard</p>
        <NavLink
                  to={ROUTE_PATH.SIGNIN}>
        <p className="login" >Logout</p>
            </NavLink>
    </div>
    </>
  )
}

export default Navlbar2;
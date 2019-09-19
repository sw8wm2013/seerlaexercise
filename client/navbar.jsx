import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return(
    <div id="navbar">
      <h1 className="logo">ReactBooks</h1>
      <div id="nav-links">
        <NavLink className="nav-link" to="/explore">Explore</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </div>
    </div>
  )
}

export default NavBar;
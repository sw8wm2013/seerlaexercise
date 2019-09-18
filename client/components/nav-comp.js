import React from 'react';


function userNavBar(props){

  return <div className="nav-bar">
    <h1 class="logo">Better Reads</h1>
    <NavLink className="nav-link" to="/explore"></NavLink>
    <NavLink className="nav-link" to="/logout"></NavLink>
  </div>
  
}

function exploreNavBar(props){

  return <div className="nav-bar">
    <h1 class="logo">Better Reads</h1>
    <NavLink className="nav-link" to="/user"></NavLink>
    <NavLink className="nav-link" to="/logout"></NavLink>
  </div>
  
}

export {userNavBar, exploreNavBar};
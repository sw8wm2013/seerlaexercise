import React, {useEffect, useContext} from 'react';
import Shelf from './shelf.jsx';
import UserContext from './userContext';


function Profile(props){
  const user = useContext(UserContext);
  
  return (
    <div id="profile-container">
      <div id="user-info">
        <img src=""/>
        <p>{user.username}</p>
        <p>Currently Reading</p>
        <p>Medal</p>
      </div>

      <div id="user-library">
        <Shelf name={user.shelves[0].name} books={user.shelves[0].books} />
      </div>
    </div>
  )
}


export default Profile;
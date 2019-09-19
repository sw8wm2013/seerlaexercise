import React, {useEffect, useContext} from 'react';
import Shelf from './shelf.jsx';
import UserContext from './userContext';
// Dynamically render shelves 

function Profile(props){
  const user = useContext(UserContext);

  const shelfArray = [];
  for (let i = 0; i < user.shelves.length; i++){
    let shelf = user.shelves[i];
    shelfArray.push(
      <Shelf name={shelf.name} books={shelf.books} key={`shelf-${i}`} />
    );
  }


  return (
    <div id="profile-container">
      <div id="user-info">
        <img src=""/>
        <p>{user.username}</p>
        <p>Currently Reading</p>
        <p>Medal</p>
      </div>

      <div id="user-library">
        {shelfArray}
      </div>
    </div>
  )
}


export default Profile;
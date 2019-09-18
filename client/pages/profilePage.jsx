import React from 'react';
import Shelf from '../components/shelf-comp';


function ProfilePage(props){

  return(
    <div className="page-container" id="user-page-container">
      <div className="profile-container">
        <img src={props.profile.image}></img>
        <p>{props.profile.currentlyReading}</p>
        <p>{props.profile.readerMedal}</p>

      </div>

      <div className="library-container" id="profile-library-container">
        <Shelf/>
      </div>

    </div>
  )

};

export default ProfilePage;
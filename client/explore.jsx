import React from 'react';

function Explore(props){
  return (
    <div id="explore-container">
      <div id="explore-search">
        <label htmlFor="explore-field" className="text">Author Name</label>
        <input type="text" placeholder="Enter Author Full Name" className="input-field" id="explore-field"/>
        <button className="button" id="explore-button">Submit</button>
      </div>
    </div>
  )
}

export default Explore;
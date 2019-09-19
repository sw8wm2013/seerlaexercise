import React, {useContext} from 'react';
import BookContext from './bookContext';

function Explore(props){
  const book = useContext(BookContext);
  
  return (
    <div id="explore-container">
      <div id="explore-search">
        <label htmlFor="explore-field" className="text">Book Title</label>
        <input type="text" placeholder="Book Title..." className="input-field" id="explore-field"/>
        <button className="button" id="explore-button">Submit</button>
      </div>
    </div>
  )
}

export default Explore;
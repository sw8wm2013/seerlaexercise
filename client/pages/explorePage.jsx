import React from 'react';


function ExplorePage(props){

  return(
    <div className="page-container" id="explore-page-container">
    
      <div className="input-container">
        <p className="text">Explore</p>
        <textArea placeholder="Explore" className="input-field" id="explore-field"></textArea>
        <button className="button" id="submit-button">Submit</button>
      </div>

      <div className="library-container" id="results-library-container">

      </div>

    </div>
  )
  
};

export default ExplorePage;

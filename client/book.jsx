  
import React from 'react';


function Book(props){

    return( 
    <div className="book">
     <div className="book-info-container">
      <img src=""></img>
      <ul className="bookInfo">
        <li className="title">{props.name}</li>
        <li className="author">Author</li>
        <li className="published">Year Published</li>
        <li className="genre">Genre</li>
      </ul>
      </div>
      <p className="summary">Lorem Ipsum Text Goes Here</p>
    </div>

    )}


export default Book;
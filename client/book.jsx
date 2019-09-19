  
import React from 'react';


function Book(props){

    return( 
    <div className="book">
     <div className="book-info-container">
      <img src={props.img}></img>
      <ul className="bookInfo">
        <li className="title"><h3>{props.title}</h3></li>
        <li className="author">{props.author}</li>
        <li className="published">{props.published}</li>
        <li className="genre">{props.genre}</li>
      </ul>
      </div>
      <p className="summary">{props.summary}</p>
    </div>

    )}


export default Book;
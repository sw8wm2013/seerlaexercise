import React from 'react';


function Book(props){

    return <div className="bookCard">
     <div className="book-info-container">
      <img src={props.image}></img>
      <ul className="bookInfo">
        <li className="title">{props.title}</li>
        <li className="author">{props.author}</li>
        <li className="published">{props.published}</li>
        <li className="genre">{props.genre}</li>
      </ul>
      </div>
      <p className="summary">{props.summary}</p>
    </div>
}


export default Book;
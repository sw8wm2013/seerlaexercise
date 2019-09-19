import React from 'react';
import Book from './book.jsx';


function Shelf(props){
  return(
    <div className="shelf-container">
      <h3>{props.name}</h3>
      <div className="shelf-books">
        <Book name={props.books[0]} />
      </div>
    </div>
  )
}

export default Shelf;
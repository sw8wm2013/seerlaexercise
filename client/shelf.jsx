import React from 'react';
import Book from './book.jsx';

function Shelf(props){
  const bookArray = [];
  for (let i = 0; i < props.books.length; i++){
    let book = props.books[i];
    bookArray.push(
      <Book img={book.image}
      title={book.title} author={book.author}
      published={book.published}
      genre={book.genre}
      summary={book.summary}
      key={`book-${i}`}
      />
    );
  }

  return(
    <div className="shelf-container">
      <h3>{props.name}</h3>
      <div className="shelf-books">
        {bookArray}
      </div>
    </div>
  )
}

export default Shelf;
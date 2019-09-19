import React from 'react';


const BookContext = React.createContext({
  addBookToBookList: () => {},
  bookList: []
});



export const BookProvider = BookContext.Provider;
export const BookConsumer = BookContext.Consumer;

export default BookContext;

import Book from './book-comp';


function Shelf(props){
  return(
    <div className="shelf-container">
      <h1>{props.genre}</h1>
      <div className="shelf-books">
        <Book/>
      </div>
    </div>
  )
}

export default Shelf;
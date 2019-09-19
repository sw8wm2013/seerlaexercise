import React, {useState} from 'react';
import NavBar from './navbar.jsx';
import SignIn from './signIn.jsx';
import SignUp from './signUp.jsx';
import Explore from './explore.jsx';
import Profile from './profile.jsx';
import {Route, Switch} from 'react-router-dom';
import {UserProvider} from './userContext';
import {BookProvider} from './bookContext';
import styles from './main.scss';

const App = (props) => {
  // use state to pass onto the provider
  const [user, setUser] = useState({
    username: 'Eric',
    shelves: [{
      name: 'Horror',
      books: ['It']
    }],
  });

  const addUserInfo = (username, shelves) => {
    setUser({username, shelves});
  }

  const addShelf = (shelfObj) => {
    setUser({shelves: [...user.shelves, shelfObj]});
  }

  const [bookList, setBookList] = useState([]);

  const addBookToBookList = (book) => {
    setBookList([...bookList, book]);
  }
  
  return(

    <div>
      <NavBar/>
      <UserProvider value={{ username: user.username, shelves: user.shelves, addUserInfo, addShelf }}>
        <Route exact path = '/' render={(props)=>(<SignIn {...props} />)}/>
        <Route path = '/signUp' render={(props)=>(<SignUp {...props} />)}/>
        <Route path = '/profile' render={(props)=>(<Profile {...props}/>)} />
      </UserProvider>

      <BookProvider value={{ addBookToBookList, bookList }}>
        <Route path = '/explore' render={(props)=>(<Explore {...props}/>)}/>
      </BookProvider>
    </div>
  );
}

export default App;
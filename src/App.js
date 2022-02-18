import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink, } from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import CardDeckPage from './CardDeckPage';
import { getUser, logout } from './services/fetch-utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function fetch() {
      const user = await getUser(); 
      if (user) setCurrentUser(user);
      
    }
    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setCurrentUser(null);
  }

  
  return (
    <div className="App">
      <Router>
        <div>
          {
            currentUser &&
            <ul>
              <li>
                <NavLink activeClassName='active-class' to='/SearchPage'>Search Cards</NavLink>
              </li>
              <li>
                <NavLink activeClassName='active-class' to='/CardDeckPage'>Card Deck</NavLink>
              </li>
              <li>
                <button on onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          }
        </div>

      </Router>
    
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink, } from 'react-router-dom';
import AuthPage from './AuthPage';
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
                <NavLink className='searching' activeClassName='active-class' to='/SearchPage'>Search Cards</NavLink>
              </li>
              <li>
                <NavLink className='page-card' activeClassName='active-class' to='/CardDeckPage'>Card Deck</NavLink>
              </li>
              <li>
                <button on onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          }
          <Switch>
            <Route exact path='/'>
              {
                currentUser
                  ? <Redirect to='/SearchPage/' />
                  : <AuthPage setCurrentUser={setCurrentUser} />
              }
            </Route>
            <Route exact path='/SearchPage'>
              {
                !currentUser
                  ? <Redirect to='/'/>
                  : <SearchPage />
              }
            </Route>
            <Route exact path='/CardDeckPage'>
              {
                !currentUser
                  ? <Redirect to='/'/>
                  : <CardDeckPage />
              }
            </Route>
          </Switch>
        </div>

      </Router>
    
    </div>
  );
}

export default App;

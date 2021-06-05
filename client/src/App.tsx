import React from 'react';
import NavbarHeader from './components/navbar-header/navbar-header.component';
import LoginView from './views/login/login.view';
import RegisterView from './views/register/register.view';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className="App">
      <NavbarHeader />
      <br />
      <div className='views-wrapper'>
        <Router>
          <Switch>
            <Route path='/login' component={LoginView} />
            <Route path='/register' component={RegisterView} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;


/**
  const ENDPOINT: string = 'localhost:4000';
  let socket: Socket;
  useEffect(() => {
    socket = io(ENDPOINT);

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, []);

  const myFn = () => {
    socket.emit('hello', {name: 'Kevin'});
  }
 */
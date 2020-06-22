import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from './Components/Home.js'

import './App.scss';

function App() {
  return (
    <HashRouter>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={''} />
        <Route exact path="/portfolio" component={''} />
        <Route exact path="/shop" component={''} />
      </Switch>
        <header className='header'>
        </header>
        <footer className="app-footer">
          <p>&copy; Copyright 2020. Nathaniel Redmon</p>
          <div>
          </div>
        </footer>
    </HashRouter>
  );
}

export default App;

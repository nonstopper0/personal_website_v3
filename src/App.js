import React, { useEffect, useState } from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from './Components/Home.js'

import './App.scss';

function App() {
  return (
    <HashRouter>
        <React.Fragment>
          <header className='header'>
            <h1>Hello</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={''} />
            <Route exact path="/portfolio" component={''} />
            <Route exact path="/downloads" component={''} />
          </Switch>
          <footer className="app-footer">
            <p>&copy; Copyright 2020. Nathaniel Redmon</p>
            <div>
            </div>
          </footer>
        </React.Fragment>
    </HashRouter>
  );
}

export default App;

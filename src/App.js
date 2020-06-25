import React, { useEffect, useState } from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom'

import Home from './Components/Home.js'
import Loader from './Components/Loader.js'

import './App.scss';

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <HashRouter>
      { !loading ? 
        <React.Fragment>
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
        </React.Fragment>
        :
        <Loader />
        }
    </HashRouter>
  );
}

export default App;

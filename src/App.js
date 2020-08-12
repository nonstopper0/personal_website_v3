import React from 'react';

import Home from './Components/Home.js'

import './App.scss';

function App() {
  return (
        <React.Fragment>
          <Home />
          <footer className="app-footer">
            <p>&copy; Copyright 2020. Nathaniel Redmon</p>
            <div>
            </div>
          </footer>
        </React.Fragment>
  );
}

export default App;

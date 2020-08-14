import React, { lazy, Suspense} from 'react';

import Loader from './Components/Loader.js'

import './App.scss';

const Home = lazy(() => import('./Components/Home.js'))

class App extends React.Component {
  render() {
    return (
        <Suspense fallback={Loader()}>
          <Home />
          <footer className="app-footer">
            <p>&copy; Copyright 2020. Nathaniel Redmon</p>
            <div>
            </div>
          </footer>
        </Suspense>
    )
  }
}

export default App;

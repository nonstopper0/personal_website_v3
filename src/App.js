import React from 'react';
import Developer from './Developer.js'
import Photographer from './Photographer.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
      return (
        <React.Fragment>
          <Developer />
        </React.Fragment>
        )
    }
}

export default App;

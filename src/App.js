import React from 'react';
import Developer from './Developer.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount = () => {
    document.title = "Nathaniel Redmon Home"
  }

  render() {
      return (
          <Developer />
          )
    }
}

export default App;

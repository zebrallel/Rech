import React from 'react'

const Goo = require('./goo').default

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      content: Goo
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox 7</h1>
        {React.createElement(this.state.content)}
      </div>
    );
  }
}

export default App
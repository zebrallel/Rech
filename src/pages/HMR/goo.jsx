import * as React from 'react'

class Goo extends React.Component{
  constructor(){
    super()

    console.log('goo constructor!');
  }
  componentDidMount(){
    console.log('Goo did mount!');
  }
  componentDidUpdate(){
    console.log('goo did update');
  }

  render(){
    return <h1>this is goo class</h1>
  }
}

export default Goo
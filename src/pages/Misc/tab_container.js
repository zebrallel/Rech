import React from "react";

class TabContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      current: props.widget
    }
  }
  componentWillReceiveProps(next){
    console.log(this.props.widget === next.widget)
  }
  shouldComponentUpdate(){
    return true
  }
  render() {
    console.log(this.state.current.dom)
    return (
      <div>
        <h1>TabContainer</h1>
        <div>{this.state.current.dom}</div>
      </div>
    );
  }
}

export default TabContainer
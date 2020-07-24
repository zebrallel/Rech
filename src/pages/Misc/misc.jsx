import React, { Component } from "react";
import TabContainer from "./tab_container";

class Example extends Component {
  state = {
    text: "hello",
  };
  obj = { dom: this.state.text };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.obj.dom = "world";
            this.setState({
              text: "world",
            });
          }}
        >
          Click me
        </button>
        <TabContainer widget={this.obj} />
      </div>
    );
  }
}

export default Example;

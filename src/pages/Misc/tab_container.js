import React from "react";

class TabContainer extends React.Component {
  state = {
    obj: {
      num: 1,
    },
    obj2 : {
      num: 100
    },
    str: 123
  };
  render() {
    return (
      <div>
        <h1>misc page</h1>
        <Comp />
        <PureComp />
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          修改值
        </button>
        <br />
        <br />
        <br />
        <button onClick={() => {
          this.setState({
            obj2: {
              num: 101
            }
          })
        }}>修改引用</button>
        <PureComp2 obj2={this.state.obj2} />
      </div>
    );
  }
}

class PureComp extends React.PureComponent {
  render() {
    console.log("pure render!!!");
    return (
      <div>
        <h3>pure component</h3>
        <div>obj num: {this.props.obj}</div>
      </div>
    );
  }
}

class Comp extends React.Component {
  render() {
    console.log("comp render!!!");
    return (
      <div>
        <h3>normal component</h3>
        <div>obj num: {this.props.obj}</div>
      </div>
    );
  }
}

class PureComp2 extends React.PureComponent {
  render() {
    console.log("pure2 render!!!");
    return (
      <div>
        <h3>pure2 component</h3>
        <div>obj2 num: {this.props.obj2.num}</div>
      </div>
    );
  }
}

export default TabContainer;

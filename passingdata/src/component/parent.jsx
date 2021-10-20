import React, { Component } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
class Parent extends React.Component {
  state = {
    name: "",
    Data: "Hello world",
  };

  handleCallback = (childData) => {
    this.setState({ name: childData });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <Child1 parentCallback={this.handleCallback} />
        {name}

        <Child2 dataFromParent={this.state.Data} />
      </div>
    );
  }
}

export default Parent;

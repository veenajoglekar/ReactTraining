import React, { Component } from "react";

class Child2 extends React.Component {
  render() {
    return (
      <div>
        <p>2..Passing data from parent to child</p> Data from parent is:
        {this.props.dataFromParent}
      </div>
    );
  }
}

export default Child2;

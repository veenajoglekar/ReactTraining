import React, { Component } from "react";
import { Name } from "./child3";

class Child4 extends React.Component {
  render() {
    return (
      <div>
        <p>3..Passing Data between Siblings</p>
        <Name.Consumer>
          {(fname) => {
            return <p>My Name is {fname}</p>;
          }}
        </Name.Consumer>
      </div>
    );
  }
}

export default Child4;

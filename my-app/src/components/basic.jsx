import React, { Component } from "react";

class Basic extends React.Component {
  render() {
    // let objkey = "name";
    let obj = {
      name: "Rohan",
    };
    console.log(Object.values(obj));
    return <h1>{obj[Object.keys(obj)[0]]}</h1>;
  }
}

export default Basic;

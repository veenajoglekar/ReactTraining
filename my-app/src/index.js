import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Basic from "./components/basic";

ReactDOM.render(
  <React.StrictMode>
    <Basic />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const person = {
//   name : "Mosh",
//   walk() {
//     console.log(this);
//   }
// };
// person.walk();

// const walk = person.walk.bind(person);
// walk();

// const square = number => number * number;
// console.log(square(6));

// const jobs = [
// { id:1, isActive: true},
// { id:1, isActive: true},
// { id:1, isActive: false}
// ];

// // const activejobs = jobs.filter (function(job) { return job.isActive; });
// const activejobs = jobs.filter(job => job.isActive);
// console.log(activejobs);

// const data = {
//   talk() {
//     var self = this;
//     setTimeout(function() {
//       console.log("self",self);
//     }, 1000);
//   }
// };

// data.talk();

// const colors = ["red", "green", "blue"];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);

// // inheritance

// class person1 {
//   constructor(name){
//     this.name = name;
//   }
//   walk() {
//     console.log("walk");
//   }
// }
// class Teacher extends person1
// {
//   constructor(name, degree)
//   {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teach");
//   }
// }
// const teacher = new Teacher("Mosh","MSC");
// console.log(teacher.name);
// console.log(teacher.degree);
// teacher.walk();

// import { Teacher2 } from "./Teacher.js";
// const teacher2 = new Teacher2("Mosh","BSC");
// teacher2.teach();

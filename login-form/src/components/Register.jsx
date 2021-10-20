import React, { Component } from "react";
import "../index.css";

class Register extends React.Component {
  registerFlag = false;

  toggleSignIn(flag) {
    console.log(flag);
    this.registerFlag = flag;
  }
  render() {
    if (!this.registerFlag) {
      return (
        <div class="wrapper">
          <div class="inner">
            <form>
              <h3>Sign In</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <p className="forgot-password text-right">
                New User? <button onClick="toggleSignIn(true)">Sign Up?</button>
              </p>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div class="wrapper">
          <div class="inner">
            <form>
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered <a onClick="toggleSignIn(false)">sign in?</a>
              </p>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Register;

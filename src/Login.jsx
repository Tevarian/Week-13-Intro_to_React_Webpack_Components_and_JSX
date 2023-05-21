import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="main">
        <div className="card">
          <h3>Log In:</h3>
          <form>
            <div>
              <label>Username:</label>
              <input type="text" name="username" />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" name="password"></input>
            </div>
            <div className="button">
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

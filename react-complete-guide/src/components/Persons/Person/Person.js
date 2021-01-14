import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");
    return (
      <div className={classes.Person}>
        {/* This needs to be used to access props of a class based component. */}
        <p onClick={this.props.click}>
          Im {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;

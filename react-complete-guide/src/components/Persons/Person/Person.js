import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import Aux from '../../../hoc/Aux'

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");
    return (
    <Fragment>
        {/* This needs to be used to access props of a class based component. 
        Converted this to be an array of elements to return adjacent elements. */}
        <p key="i1" onClick={this.props.click}>
          Im {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
    </Fragment>
    );
  }
}

export default Person;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from "./Person.css";
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");
    return (
    <Aux>
        {/* This needs to be used to access props of a class based component. 
        Converted this to be an array of elements to return adjacent elements. */}
        <p key="i1" onClick={this.props.click}>
          Im {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux>
    );
  }
}

// React will watch for this in devlopment mode and then give you a warning if you pass incorect props. 
Person.propTypes = {
  // For a click I expect to get a pointer to a function.
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

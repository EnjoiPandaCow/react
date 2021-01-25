import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from "./Person.css";
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // Use ref to focus on the last input element
  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering ...");
    return (
    <Aux>
        <AuthContext.Consumer>
          {/* Function where you get context as an argument */}
          {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>}
        </AuthContext.Consumer>
        {/* This needs to be used to access props of a class based component. 
        Converted this to be an array of elements to return adjacent elements. */}
        <p key="i1" onClick={this.props.click}>
          Im {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3"
          /* The argument you are getting is a reference to the element you place this on. 
          Getting access to the imput element and storing it in a global property (this.inputElement) so that we can access it anywhere in our application.
          ref={(inputEl) => {this.inputElement = inputEl}} */
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
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

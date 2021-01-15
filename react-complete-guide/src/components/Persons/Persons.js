import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // The upcoming props which will have an affect and the upcoming state.
  shouldComponentUpdate(nextProps) {
    console.log('[Persons.js] shouldComponentUpdate');
    // Have to return true if react should continue updating or false if it should not.
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // Used for "clean up work in class based components."
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  } 

  render() {
    console.log("[Persons.js] rendering ...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

/* If you only have to return one line in the function body, when using arrow functions you do not need to use a return.
const persons = (props) => {
  console.log("[Persons.js] rendering ...");
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });
}; */

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: "3232", name: 'CJ', age: 26},
      { id: "2332", name: 'David', age: 40},
      { id: "7532", name: 'Crona', age: 46},
    ],
    otherState: 'another value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    // Finding the person in the array, in state that we want to change.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Using the spread operator and creating a new object to avoid mutation the orignal object. 
    const person = {
      ...this.state.persons[personIndex]
    };

    // Getting the new name value and assigning it to person above.
    person.name = event.target.value

    // Getting the original array spreading it and then using the personIndex to assign the new person name.
    const persons = [...this.state.persons];
    persons[personIndex] = person; 

    // Updating the state with the new persons array with the name changed. 
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;

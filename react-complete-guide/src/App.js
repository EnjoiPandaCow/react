import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      // Pushing the red CSS class to change the color of the button when clicked.
      btnClass = classes.Red;
    }

    // Setting up and array that can be filled with class names depending on the amount of persons. 
    const assignedClasses = []; 
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          {/* .join() allows the array to be turned into a string */}
          <p className={assignedClasses.join(' ')}>Hi, I'm a React App</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons}
        </div>
    );
  }
}

// Calling radium as a function and wrapping the app with it.
export default App;

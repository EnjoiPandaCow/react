import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor (props) {
    // Executes the compnent of the component you are extending. In this case Component.
    super(props);
    console.log('[App.js] constructor');
    // Can set state in constructor if in an older project.
  }

  state = {
    persons: [
      { id: "3232", name: 'CJ', age: 26},
      { id: "2332", name: 'David', age: 40},
      { id: "7532", name: 'Crona', age: 46},
    ],
    otherState: 'another value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js render]');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        {/* Added an inline event handler, and anonmys function that executed when a click occurs */}
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {/* Checking if the cockpit should be rendered */}
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;

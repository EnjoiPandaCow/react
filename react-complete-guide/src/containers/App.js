import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// Imported with a lower case character becasuse it is not a component anymore it's a normal function.
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

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
    showCockpit: true,
    changeCounter: 0,
    authenticated: false 
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
    // Becasue of adding the change counter we rely on the previous state to update. Becasue of this we need to return a function.
    this.setState((preState, props) => {
      return {
        persons: persons, 
        changeCounter: preState.changeCounter + 1
      }
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  };

  render() {
    console.log('[App.js render]');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        isAuthenticated={this.state.authenticated} />
    }

    return (
       
      <Aux>
        {/* Added an inline event handler, and anonmys function that executed when a click occurs */}
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
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
        </AuthContext.Provider>
      </Aux>
    );
  }
}

// To use the function based HOC's we need to wrap the component in it and then pass the arguments. 
export default withClass(App, classes.App);

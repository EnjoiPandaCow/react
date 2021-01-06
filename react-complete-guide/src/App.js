import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'CJ', age: 26},
      { name: 'David', age: 40},
      { name: 'Crona', age: 46},
    ],
    otherState: 'another value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 26},
        { name: 'David', age: 40},
        { name: 'Crona', age: 46},
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'CJ', age: 26},
        { name: event.target.value, age: 40},
        { name: 'Crona', age: 46},
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        { this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              click={this.switchNameHandler.bind(this, 'Ceejee')}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              changed={this.nameChangedHandler}/>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}>My hobbies: Cooking</Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;

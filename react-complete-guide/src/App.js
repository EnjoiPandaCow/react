import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'CJ', age: 26},
      { name: 'Dvaid', age: 40},
      { name: 'Crona', age: 46},
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies: Cooking</Person>
      </div>
    );
  }
}

export default App;

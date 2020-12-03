import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'CJ', age: 26},
      { name: 'Dvaid', age: 40},
      { name: 'Crona', age: 46},
    ],
    otherState: 'another value'
  });

  const [ otherState, setOtherState ] = useState('some other value')

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonsState( {
      persons: [
        { name: 'Christopher John', age: 26},
        { name: 'Dvaid', age: 40},
        { name: 'Crona', age: 46},
      ]
    } )
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies: Cooking</Person>
    </div>
  );
}

export default app;

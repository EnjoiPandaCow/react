import React, { useEffect } from 'react';
import classes from './Cockpit.css';

// Have to return a normal function body as we will need more logic.
const cockpit = (props) => {

  // Reach Hook
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });

    // Setting up and array that can be filled with class names depending on the amount of persons. 
    const assignedClasses = []; 

    let btnClass = '';
    // Pushing the red CSS class to change the color of the button when clicked.
    btnClass = classes.button;
    // Checking weather we want to add this red class to the button.
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            {/* .join() allows the array to be turned into a string */}
            <h2 className={assignedClasses.join(' ')}>{props.title}</h2>
            <button className={btnClass} onClick={props.clicked}> Toggle Persons </button>
        </div>
    );
}

export default cockpit;
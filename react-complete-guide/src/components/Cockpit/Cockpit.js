import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

// Have to return a normal function body as we will need more logic.
const cockpit = (props) => {

  // Allows you to get access to your DOM elements
  const toggleBtnRef = useRef(null);

  const authContext = useContext(AuthContext)
  console.log(authContext.authenticated);

  // Reach Hook
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // Mock HTTP Request 
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    // Returning a function that runs after the first render cycle
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
    // Adding this array allows us to only send the alert when persons is changed. The empty array ensures that this only happens when the component is first rendered.
  }, /*[props.persons]*/ []);

  // Cleans up after every render cycle
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
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

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); 
    }
    if (props.personsLength <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            {/* .join() allows the array to be turned into a string */}
            <h2 className={assignedClasses.join(' ')}>{props.title}</h2>
            <button 
              ref={toggleBtnRef}
              className={btnClass} 
              onClick={props.clicked}> 
              Toggle Persons 
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
}

export default React.memo(cockpit);
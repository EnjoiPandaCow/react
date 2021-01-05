import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Im {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
import React from 'react';


const validation = (props) =>  {

    // Using turniary expression for the condition.
    /* if (props.inputLength < 5 ) {
        return <p>Text Too Short</p>
    } else {
        return <p>Text Too Long</p>
    } */

    let validationMessage = 'Text long enough.'
    if(props.inputLength <= 5) {
        validationMessage = 'Text too short.'
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )


}

export default validation 
import React from 'react';

const withClass = props => (
    // Classes will be a property that we will get on the higher order component.
    <div className={props.classes}>
        {/* props.children is the content of the withClass opening and closing tag */}
        {props.children}
    </div>
);

export default withClass; 
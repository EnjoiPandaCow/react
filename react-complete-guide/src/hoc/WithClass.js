import React from 'react';

// Creating a regular JS function HOC. It's not a component fucntion becasue we are not getting props. 
// We aren't returning JSX we are actually returning another function definition and that is the function definition of a compoent function. 
const withClass = (WrappedCompoent, className) => {
    // This is a functional component. 
    // This is the props of our wrapped component 
    return props => (
        <div className={className}>
            {/* This is a component that we are reciving */}
            {/* The props we are getting here are a JS object, the spread operator then pulls out all of the properties that ar inside of this props object 
            and distributes them as new key value pairs. */}
            <WrappedCompoent {...props}/>
        </div>
    );
}
export default withClass; 
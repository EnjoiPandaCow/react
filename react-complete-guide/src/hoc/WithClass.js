import React from 'react';

// Creating a regular JS function HOC. It's not a component fucntion becasue we are not getting props. 
// We aren't returning JSX we are actually returning another function definition and that is the function definition of a compoent function. 
const withClass = (WrappedCompoent, className) => {
    // This is a functional component. 
    return props => (
        <div className={className}>
            {/* This is a component that we are reciving */}
            <WrappedCompoent />
        </div>
    );
}
export default withClass; 
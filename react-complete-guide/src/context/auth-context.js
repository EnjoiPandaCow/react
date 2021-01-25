import React from 'react';

// Can have a default value becasue the context is a globally available JS object.
const authContext = React.createContext({
    authenticated: false,
    // Empty anonomyus function. Here becasue if I initilaize the default value it allws us to get better auto completion from the IDE.
    login: () => {}
});

export default authContext;
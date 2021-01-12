import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    /* Method that recives an error and some extra info passed into it by react. 
    Will be executed whenever a component we wrap with the error boundary throws an error.*/
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            // This is whatever we wrap inside of ErrorBounday
            return this.props.children
        }
    }
}

export default ErrorBoundary;
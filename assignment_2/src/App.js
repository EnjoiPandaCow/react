import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/Validation';
import Char from './CharComponent/Char'

class App extends Component{

  state = { 
    textInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({textInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.textInput.split('');
    // Removes the character from the array.
    text.splice(index, 1);
    // Converts the array of characters into a string.
    const updatedText = text.join('');
    this.setState({textInput: updatedText});
  }

  render() {

    // Map's every element of the textInput into a new element. Map gives you a new array which is stored in charList it does not touch the original array. Split lets you map a sting to an array.
    const charList = this.state.textInput.split('').map((ch, index) => {
      // Returning the char component and passing the single character into the char component. 
      return <Char 
        character={ch} 
        key={index} 
        // By using an anon function we a pass a reference to the deleteCharHandler it does not get executed immedietly but whe the click happens.
        clicked={() => this.deleteCharHandler(index)} />;
    })

    return (
      <div className="App">

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
  
        <input type="text" onChange={this.inputChangedHandler} value={this.state.textInput}/>
        <p>Text Length : {this.state.textInput.length}</p>
        <Validation inputLength={this.state.textInput.length}/>
        {charList}

      </div>
    );
  }
}

export default App;

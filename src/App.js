import logo from './logo.svg';
import './App.css';
import React from 'react';

const ITEMS = [
  {category: 'School', item: 'Jazz Post Discussion', due: 2022-13-11, done: true},
  {category: 'School', item: 'Assignment 6', due: 2022-17-11, done: false},
  {category: 'Work', item: 'Spanish Translation of Action Page', due: 2022-18-11, done: true},
  {category: 'Work', item: 'Design Impact Statement', due: 2022-20-11, done: false},
  {category: 'Work', item: 'Redesign of Billboard', due: 2022-22-11, done: false},
  {category: 'Personal', item: 'Pay Credit Card Bill', due: 2022-25-11, done: false},
  {category: 'Personal', item: 'Christmas Shop', due: 2022-30-11, done: false},
  
];
class SubHeading extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class CheckBox extends React.Component {
  render() {
    const done = this.props.done;
    const box : 
      <span>
    if(done === true){

    }
    else{

    }
    return(

    );
  }
  
}

class ItemRow extends React.Component {
  render() {
    const item = this.props.item;
    const dueDate = this.props.due;

    return (
      <tr>
        <td>{item}</td>
        <td>{dueDate}</td>
      </tr>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/PersonList/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 1, name: 'Cam', age: 26},
      {id: 2, name: 'Sarah', age: 30},
      {id: 3, name: 'Carmicheal', age: 39}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons : !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons){
      persons = <Persons persons={this.state.persons}
                         clicked={this.deletePersonHandler}
                         changed={this.nameChangeHandler}/>
    };

    return (
     <div className={classes.App}>
      <Cockpit title={this.props.appTitle}
               personCount={this.state.persons.length}
               toggled={this.state.showPersons}
               toggler={this.togglePersonsHandler}
               persons={persons}/>
    </div>
   );

  }
}

export default App;

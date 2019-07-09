import React, { Component } from 'react';
import classes from './App.css';
import Person from '../Components/Person/Person';
import Persons from '../Components/PersonList/Persons';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Cam', age: 26},
      {id: 2, name: 'Sarah', age: 30},
      {id: 3, name: 'Carmicheal', age: 39}
    ],
    showPersons: false
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
    let persons = null;
    let buttonClass ='';

    if (this.state.showPersons){
      persons = <Persons persons={this.state.persons} 
                         clicked={this.deletePersonHandler} 
                         changed={this.nameChangeHandler}/>

      buttonClass = classes.Red
    };

    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
     <div className={classes.App}>
      <h1>React App</h1>
      <p className={assignedClasses.join(' ')}>Here is our practice project!</p>
      <button className={buttonClass}
              onClick={this.togglePersonsHandler}>Switch name</button>
      {persons}
    </div>
   );

  }
}

export default App;

import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  const assignedClasses = [];

  if(props.personCount <=2){
    assignedClasses.push(classes.red);
  }
  if(props.personCount <= 1){
    assignedClasses.push(classes.bold);
  }

  let buttonClass ='';
  if(props.toggled === true){
    buttonClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>Here is our practice project!</p>
      <button className={buttonClass}
            onClick={props.toggler}>Switch name</button>
      {props.persons}
    </div>
  );
}

export default cockpit;

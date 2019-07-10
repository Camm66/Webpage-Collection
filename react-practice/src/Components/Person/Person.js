import React from 'react';
import classes from './Person.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const person = (props) => {
  return (
        <div className={classes.Person}>
         <p>I'm {props.name}! I am {props.age} years old!</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} placeholder={props.name}/>
         <button className='btn btn-secondary' onClick={props.click}>Delete</button>
      </div>
    )
};

export default person;

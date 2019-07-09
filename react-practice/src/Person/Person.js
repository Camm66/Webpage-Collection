import React from 'react';
import './Person.css';

const person = (props) => {
      return (
          <div className='Person'>
           <p>I'm {props.name}! I am {props.age} years old!</p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed} placeholder={props.name}/>
           <button className='btn btn-secondary' onClick={props.click}>Delete</button>
        </div>
      )
};

export default person;
import React from './React';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
        return <Person name={person.name} 
                       age={person.age} 
                       key={person.id}
                       click={() => props.clicked(index)}
                       changed={(event) => props.changed(event, person.id)}/>
      });

export default persons;
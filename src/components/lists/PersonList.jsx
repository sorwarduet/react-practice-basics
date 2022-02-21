import React from "react";
import Person from "../representation/Person";


const PersonList=(props)=>{
    return(
      props.persons.map((person,index)=>{
            return(
            
              <Person 
                key={index}
                person={person}
                delete={()=> props.deletePerson(index)}
                inputChange={(event)=> props.handlerInputChange(event, index)}
                handelerSelectPerson={()=>props.handelerSelectPerson(person.id)}
              />
           
            );
          })
    );
}

export default PersonList;
import React from "react";
import Person from "../representation/Person";

const PersonList=(props)=>{
    return(
      props.persons.map((person,index)=>{
            return(
              <Person 
                key={index}
                name={person.name}
                delete={()=> props.deletePerson(index)}
                inputChange={(event)=> props.handlerInputChange(event, index)}
              />
            );
          })
    );
}

export default PersonList;
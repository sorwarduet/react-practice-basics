import React from "react";

const Person=(props)=>{
    console.log(props);
    return(
        <div className="person">
              <h3>Name:{props.name}</h3>
              <input type="text" onChange={props.inputChange} value={props.name}/>
              <button onClick={props.delete}>Delete</button>
        </div>
    );
}

export default Person;
import React from "react";
import { Link } from "react-router-dom";

const Person=(props)=>{
    return(
        <Link to={"/"+props.person.id}className="link-style" >
            <div className="person" onClick={props.handelerSelectPerson}>
                <h3>Name:{props.person.name}</h3>
                <input type="text" onChange={props.inputChange} value={props.name}/>
                <button onClick={props.delete}>Delete</button>
            </div>
            </Link>
     
    );
}

export default Person;
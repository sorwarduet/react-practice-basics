import React from "react";


const PersonDetail=(props)=>{
   console.log(props);
   if (props.person==null) return <div></div>
    return(
        <div>
            <h1>{props.person.id}</h1>
             <h2>{props.person.name}</h2>
        </div>
    );
}

export default PersonDetail;
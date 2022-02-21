import { persons } from '../assets/persons';

let initState={
    persons: persons
}



export const Reducer=(state=initState, action)=>{

    console.log(state)

    if(action.type==='ADD_PERSON'){
        

        let person=action.payload
        console.log(person)

        return state.persons.concat(person)
            

    }

    return state;
}


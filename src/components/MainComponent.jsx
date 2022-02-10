import React, { Component } from 'react';
import { persons } from '../assets/persons';
import PersonList from './lists/PersonList';



class MainComponent extends Component{
  state={
   persons: persons,
   showPerson: true,
  }

 

  handlerInputChange=(event, index)=>{
    const person = {
      ...this.state.persons[index],
    }
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[index]=person;

    this.setState({
      persons: persons
    });
  }

  deletePerson=(index)=>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({
      persons: persons
    })

  }

  handPersonShow=()=>{
    this.setState({
      showPerson: !this.state.showPerson,
    });
  }

  render(){
    let persons=null;
    if(this.state.showPerson){
       persons = <PersonList 
       persons={this.state.persons}
       handlerInputChange={this.handlerInputChange}
       deletePerson={this.deletePerson}
       
       />
    }
    

    return(
      <div className='App'>
        <h3>Person List</h3>
        <button onClick={this.handPersonShow}>Togole Button</button>
        {this.state.showPerson?persons:null}
       
      </div>

    );
  }
}

export default MainComponent;

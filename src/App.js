import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';


class App extends Component{
  state={
   persons:[
     {name: "John Bidwell"},
     {name: "A. E. Coppard (1878-1957)"},
     {name: "Stephen Crane (1871-1900)"},
     {name: "Roald Dahl (1916-1990)"},
     {name: "	Sir Arthur Conan Doyle (1859-1930)"},

   ],
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

    const persons = this.state.persons.map((person,index)=>{
      return(
        <Person 
          key={index}
          name={person.name}
          delete={()=> this.deletePerson(index)}
          inputChange={(event)=> this.handlerInputChange(event, index)}
        />
      );
    });


    console.log(this.state)
    return(
      <div className='App'>
        <h3>Person List</h3>
        <button onClick={this.handPersonShow}>Togole Button</button>
        {this.state.showPerson?persons:null}
       
      </div>

    );
  }
}

export default App;

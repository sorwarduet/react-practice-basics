import React, { Component } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { persons } from '../assets/persons';
import BlogPost from './BlogPost';
import PersonList from './lists/PersonList';
import NewBook from './NewBook';
import NewPerson from './NewPerson';
import PersonDetail from './representation/PersonDetail';



class MainComponent extends Component{
  
  state={
    persons: persons,
    showPerson: true,
    selectPerson: null
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

  handelerSelectPerson=personId=>{
    let person = this.state.persons.filter(person=> person.id === personId)[0]
    this.setState({
      selectPerson: person
    })

  }


  render(){


    let persons=null;
    if(this.state.showPerson){
       persons = <PersonList 
       persons={this.state.persons}
       handlerInputChange={this.handlerInputChange}
       deletePerson={this.deletePerson}
       handelerSelectPerson ={this.handelerSelectPerson}
       
       />
    }
    

    return(
      <div className='App'>
        <nav className='nav-bar'>
          <ul>
            <li><NavLink  to="/" exact>Home</NavLink></li>
            <li><NavLink  to="new-person" exact>New Person Enty</NavLink></li>
            <li><NavLink  to="new-book" exact>New Book Enty</NavLink></li>
            <li><NavLink  to="blog-post" exact>Blog Post</NavLink></li>
          </ul>

        </nav>
        {/* <button onClick={this.handPersonShow}>Togole Button</button>
        {this.state.showPerson?persons:null} */}

        <Switch>
            <Route path="/persons"  exact render={()=> persons} />
            <Route path="/new-person" exact component={NewPerson} />
            <Route path="/new-book" exact component={NewBook} />
            <Route path="/blog-post" exact component={BlogPost} />
            <Route path="/:id"
                render={()=> <PersonDetail person={this.state.selectPerson}/>
            }/>

            <Redirect from='/' to='/persons' />
        </Switch>
       
        
       

       
       
       
      </div>

    );
  }
}

export default MainComponent;

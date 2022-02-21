import React, { Component } from "react";
import { connect } from 'react-redux';

class NewPerson extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            description: ""
        }
        // this.handleInputChange=this.handleInputChange.bind(this); when need event bind
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit=(event)=>{
        event.preventDefault();
        
        console.log(this.state)
        console.log(this.props)

        this.props.dispatch({
            type: "ADD_PERSON",
            payload: {
                name: this.state.name,
                description: this.state.description
            }
        })
        
       

    }

    handleInputChange=(event)=>{
       const name = event.target.name;
       const value = event.target.value;

       this.setState({
           [name]:value
       })
    }

   render(){
    

    return(
        <div>
            <h1>New Person Add</h1>
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <label>Name</label>
                <br />
                <input type="text" name="name" value={this.state.name} 
                onChange={(event)=>this.handleInputChange(event)} />
                <br />
                <label>Description</label>
                <br />
                <textarea name="description" id="" cols="30" rows="10" value={this.state.description}
                onChange={(event)=>this.handleInputChange(event)} 
                ></textarea>
                <br />

               <input type="submit" value="Submit" />
            </form>
        </div>
    );
   }
    
}

export default connect() (NewPerson);
import React, { Component, createRef } from "react";

class NewBook extends Component{
    constructor(props){
        super(props);
        this.name= createRef()
        this.description = createRef()
        //this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleSubmit=(event)=>{
        console.log(this.name.current.value)
        console.log(this.description.current.value)
        event.preventDefault();

    }

  

   render(){
    return(
        <div>
            <h1>New Book Add</h1>
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <label>Name</label>
                <br />
                <input type="text" name="name" ref={this.name} />
                <br />
                <label>Description</label>
                <br />
                <textarea name="description" ref={this.description} id="" cols="30" rows="10" ></textarea>
                <br />

               <input type="submit" value="Submit" />
            </form>
        </div>
    );
   }
    
}

export default NewBook;
import axios from 'axios';
import React, { Component } from "react";


class BlogPost extends Component{

    state={
        posts : null,
        errMsg: null,
        loading: true
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then( data => console.log(data));

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => {
        //     console.log(response.data)
        //     console.log(response.status)
        // });

        
        // get request in server 

        console.log('DidMount:', this.state)

       
        //axios.get('https://jsonplaceholder.typicode.com/posts')
        
         axios.get('http://localhost:3001/posts')
        .then(res=> {
            this.setState({
                posts: res.data,
                loading: false
            })
        })
        .catch(error =>{
            this.setState({
                errMsg: error.message,
                loading: false
            })

        } )

        // post request in server
        // const data ={
        //     title: 'Hello Post',
        //     auhtor: "New blog"
        // }

        // axios.post('http://localhost:3001/posts', data)
        // .then(response => console.log(response));



        // // update request 

        // const dataUpdate ={
        //     title: 'Hello Post',
        //     auhtor: "MY blog"
        // }

        // axios.put('http://localhost:3001/posts/2', dataUpdate)
        // .then(response => console.log(response));

        // delete request

        // axios.delete('http://localhost:3001/posts/4')
        // .then(response => console.log(response));



    }

    componentDidUpdate(){
        console.log("Update:", this.state)
    }



    render(){

        return(
            <div>
                <h2>Blog List</h2>
                {this.state.loading? <h2>Loadding</h2>: <h1>Load Done</h1>}
            </div>
        );
    }
}

export default BlogPost;
import React from 'react';
import './App.css';



export class App extends React.Component{
    render(){
        return(
            <div>
                <h1 id = "title"> Daily Topic Generator </h1>
            </div>
        )
    }
}



export class Timer extends React.Component{
    constructor(props){
        super()
        this.state = {
            time: setInterval( () => { new Date().toLocaleString()}, 1000 )
        
        }
    }
    componentDidMount() {
        setInterval( () => {
        this.setState({
            time : new Date().toLocaleString(),
        })
        },1)

      }

    
    render(){
        return(
            <div>
                <h4 id = "date" >{this.state.time}</h4>
                
            </div>
        )
    }
} 



import React from 'react';
import './App.css';



export class Warning extends React.Component{
    render(){
        return(
            <div id = "warning">
                <p>Warning: Turn off private browsing to avoid daily topic reset</p>
            </div>
        )
    }
}

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
            <div id = 'date-box'>
                <h4 id = "date" >{this.state.time}</h4>
                
            </div>
        )
    }
} 



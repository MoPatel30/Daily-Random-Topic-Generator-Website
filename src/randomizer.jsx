import React from 'react';
import './randomizer.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import {Topic} from './App';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

export class Randomizer1 extends React.Component{
    render(){
        return(
            <div>
                <p style = {{color: 'whitesmoke', fontSize: "24px" }}>Randomizer Button?</p>
            </div>
        )
        
    }
}


export class Randomizer extends React.Component{
    constructor(){
      super()
      this.state = { 
          topic_of_the_day: ['Galileo', 'Newton', 'Da Vinci'],
          topic : ''

        }
    
    }
    operation(){
      this.setState ({
             
            topic: this.state.topic_of_the_day[Math.floor(Math.random() * 
                this.state.topic_of_the_day.length)]
        })
    }
  
    render(){
        return(
            <div>
                <button onClick={()=>this.operation()} style = {{ backgroundColor: 'whitesmoke', position: 'absolute', top: '215px', left: '1150px', fontSize: '24px', fontFamily: 'Open Sans Condensed'}}>Randomize</button>
                <h1 style = {{color: "white", fontSize: "32px", position: "absolute", left: "950px", top: "180px"}}>{this.state.topic}</h1>
            </div>
        )
    }
   /* render() {
      return (
        <div className = "button-styling">
        
          {
          this.state.showMessage?
          <div>
            <HashRouter>
            <Route path="/" component = {Topic} />
            </HashRouter>
          </div>
          :null
          }
          <nav>
            <HashRouter>
              <NavLink exact to="/">
                <button onClick={()=>this.operation()} style = {{ backgroundColor: 'whitesmoke', position: 'absolute', top: '62.5px', left: '1250px', fontSize: '24px', fontFamily: 'Open Sans Condensed'}}>Randomize</button>
              </NavLink>
            </HashRouter>
          </nav>
        </div>
      )
    }*/
  }
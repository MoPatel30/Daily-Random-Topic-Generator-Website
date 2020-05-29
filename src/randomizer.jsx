import React from 'react';
import './randomizer.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import {Topic} from './App';

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
      this.state = { showMessage: true }
    
    }
    operation(){
      this.setState ({showMessage: !this.state.showMessage})
    }
  
    
    render() {
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
    }
  }
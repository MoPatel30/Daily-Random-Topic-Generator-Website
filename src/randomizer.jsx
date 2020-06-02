import React from 'react';
import './randomizer.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import {Topic} from './App';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

import TopicData from './topics.json';

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
    
        let topic_on_start = 0

        TopicData.map(function(topics,index){
            topic_on_start = index
            return topic_on_start
        })
    
        let numOne = topic_on_start
            
        let random_num_on_start = Math.floor(Math.random() * numOne)

      this.state = {
          //topic : TopicData[random_num_on_start].name,
          //description: TopicData[random_num_on_start].description
            topic: TopicData[0].name,
            descone: TopicData[0].descOne,
            desctwo: TopicData[0].descTwo,
            descthree: TopicData[0].descThree,
            descfour: TopicData[0].descFour
        }
    
    }

    operation(){
     
       // let currentTopic = TopicData.get(0).name
       // let currentDescription = TopicData.get(0).description

        let temp = 0

       TopicData.map(function(topics,index){
            temp = index
            return temp
        })

        let num = temp
        
        let random_num = Math.floor(Math.random() * num)
        
      this.setState ({
           
            topic: TopicData[random_num].name,
            description:  TopicData[random_num].description
        })
    }
  
    render(){
        
        return(
            <div>

                <div id = "topic-name">
                    <p style = {{color: "whitesmoke", fontSize: "42px", textAlign: "left", fontWeight: "500"}}> <em><u>Topic of the Day: {this.state.topic}</u></em></p>
                </div>


                <div id = "topic">
                    <p className = "text-style"> {this.state.descone} </p>
                    <p className = "text-style"> {this.state.desctwo} </p>
                    <p className = "text-style"> {this.state.descthree} </p>
                    <p className = "text-style"> {this.state.descfour} </p>


                </div>


                <div id="random-button">
                    <button onClick={()=>this.operation()} style = {{ backgroundColor: 'whitesmoke', position: 'absolute', top: '215px', left: '1150px', fontSize: '24px', fontFamily: 'Open Sans Condensed'}}>Randomize</button>
            
                </div>

            </div>
        )
    }

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


                    <p className = "text-style">Birth Date: February 15, 1564</p>
                    <p className = "text-style">Death Date: January 8, 1642</p>
                    <p className = "text-style">Place of Birth: Pisa, Italy</p>
                    <p className = "text-style">Galileo Galilei was an Italian astronomer, physicist, engineer, mathematician, and philosopher.</p>
                    <p className = "text-style">Galileo was the first of six children, and his father was a musician/scholar. During his teenage years, he attended the University of Pisa to study medicine, but was later sidetracked by mathematics.He ended up leaving without completing his degree.</p>
                    <p className = "text-style">Galileo has made some remarkable contributions to science,astronomy, and mathematics:</p>
                    <p className = "text-style">-Proved objects fall at the same speed regardless of shape/space</p>
                    <p className = "text-style">-First developed the concept of Inertia, which helped Isaac Newton later with his findings</p>
                    <p className = "text-style">-Galileo’s compasses were used by the military</p>
                    <p className = "text-style">-He also discovered the rings of Saturn and the different Phases of Venus</p>
                    <p className = "text-style">Later in his life, Galileo became an advocate for heliocentrism and would teach about it whenever he can. This brought upon enemies among the Catholic Church Leaders, which eventually led to his house arrest sentencing.</p>
                    <p className = "text-style">Galileo spent the last 9 years of his life under house arrest, dying at the age of 77.</p>
   
                }*/
  
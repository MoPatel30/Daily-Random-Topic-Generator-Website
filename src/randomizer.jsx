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


var date1 = 31

/*
var currentT = TopicData[0].name
var currentDO = TopicData[0].descOne
var currentDT = TopicData[0].descTwo
var currentDTH = TopicData[0].descThree
var currentDF = TopicData[0].descFour
*/

var currentT = window.localStorage.getItem('topic')
var currentDO = window.localStorage.getItem('descone')
var currentDT = window.localStorage.getItem('desctwo')
var currentDTH = window.localStorage.getItem('descthree')
var currentDF = window.localStorage.getItem('descfour')

if (String(currentT) === null){
    changeTopic()
}

window.localStorage.setItem('topic', currentT)
window.localStorage.setItem('descone', currentDO)
window.localStorage.setItem('desctwo', currentDT)
window.localStorage.setItem('descthree', currentDTH)
window.localStorage.setItem('descfour', currentDF)
//window.localStorage.setItem('date', String(date1));
 

//localStorage.currentDate = date1
var noUpdate = 0

function checkTime(){
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()

    if (Number(hours) === 23 && Number(minutes) === 59){
        
        return changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
    }
    else{
        return noUpdate
    } 
}



// checks if one day has passed. 
function hasOneDayPassed(){
  // get today's date. eg: "7/37/2007"
  var date = new Date().getMinutes() 

  // if there's a date in localstorage and it's equal to the above: 
  // inferring a day has yet to pass since both dates are equal.
  if( date1 === date ) 
      return false;

  // this portion of logic occurs when a day has passed
  
  date1 = date
  return true;
}


// some function which should run once a day
function runOncePerDay(){
    if( !hasOneDayPassed() ) return false;
    else return changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
    
}





function changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF){
    let topic_on_start = 0

    TopicData.map(function(topics,index){
        topic_on_start = index
        return topic_on_start
    })
        
    let numOne = topic_on_start
                
    let random_num_on_start = Math.floor(Math.random() * numOne)

    var strings = []

    currentT = TopicData[random_num_on_start].name
    currentDO = TopicData[random_num_on_start].descOne
    currentDT = TopicData[random_num_on_start].descTwo
    currentDTH = TopicData[random_num_on_start].descThree
    currentDF = TopicData[random_num_on_start].descFour

    window.localStorage.setItem('topic', currentT)
    window.localStorage.setItem('descone', currentDO)
    window.localStorage.setItem('desctwo', currentDT)
    window.localStorage.setItem('descthree', currentDTH)
    window.localStorage.setItem('descfour', currentDF)
    
    strings.push(currentT, currentDO, currentDT, currentDTH, currentDF)

    return strings


}



var todayTopic = window.localStorage.getItem('topic')
var todayDescOne = window.localStorage.getItem('descone')
var todayDescTwo = window.localStorage.getItem('desctwo')
var todayDescThree = window.localStorage.getItem('descthree')
var todayDescFour = window.localStorage.getItem('descfour')



export class Randomizer extends React.Component{
    constructor(){
        super()
        
        var update = checkTime()

        if( typeof update !== "number"){
            this.state = {
          //topic : TopicData[random_num_on_start].name,
          //description: TopicData[random_num_on_start].description
            topic: update[0],
            descone: update[1],
            desctwo: update[2],
            descthree: update[3],
            descfour: update[4]
            }
        }
        else{
            this.state = {
            topic: todayTopic,
            descone: todayDescOne,
            desctwo: todayDescTwo,
            descthree: todayDescThree,
            descfour: todayDescFour
            }
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
        //length of indexes #
        let num = temp
        
        let random_num = Math.floor(Math.random() * num)
          
        
            this.setState ({
                topic: TopicData[random_num].name,
                descone: TopicData[random_num].descOne,
                desctwo: TopicData[random_num].descTwo,
                descthree: TopicData[random_num].descThree,
                descfour: TopicData[random_num].descFour
            })
            
        
        
    }
  
    render(){
        
        return(
            <div>

                <div id = "topic-name">
                    <p id = "topic-current-name"> <em>Topic of the Day: <span class = "goldenrod"><u>{this.state.topic}</u></span></em></p>
               
                </div>


                <div id = "topic">
                    <p className = "text-style"> {this.state.descone} </p>
                    <p className = "text-style"> {this.state.desctwo} </p>
                    <p className = "text-style"> {this.state.descthree} </p>
                    <p className = "text-style"> {this.state.descfour} </p>

                </div>


                <div id="random-button">
                    <button id="randomizer-style" onClick={()=>this.operation()}>Randomize</button>
            
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
  
import React from 'react';
import './randomizer.css';
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


//using Local storage to be able to access the same topic for a 24hr period
var currentT = window.localStorage.getItem('topic')
var currentDO = window.localStorage.getItem('descone')
var currentDT = window.localStorage.getItem('desctwo')
var currentDTH = window.localStorage.getItem('descthree')
var currentDF = window.localStorage.getItem('descfour')



var test1 = [currentT, currentDO, currentDT, currentDTH, currentDF]


   
window.localStorage.setItem('topic', test1[0])
window.localStorage.setItem('descone', test1[1])
window.localStorage.setItem('desctwo', test1[2])
window.localStorage.setItem('descthree', test1[3])
window.localStorage.setItem('descfour', test1[4])



//function that changes the topic. is called once a day.
function changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF){
    let topic_on_start = 0

    TopicData.map(function(topics,index){
        topic_on_start = index
        return topic_on_start
    })
    
    let numOne = topic_on_start + 1
                
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

    return 


}

   
//grabbing from local storage to use in rendering process
var todayTopic = window.localStorage.getItem('topic')
var todayDescOne = window.localStorage.getItem('descone')
var todayDescTwo = window.localStorage.getItem('desctwo')
var todayDescThree = window.localStorage.getItem('descthree')
var todayDescFour = window.localStorage.getItem('descfour')





export class Randomizer extends React.Component{
    constructor(){
        super()

        this.state = {
            curTime: setInterval( () => { new Date().toLocaleString()},1000 ),
            topic: todayTopic,
            descone: todayDescOne,
            desctwo: todayDescTwo,
            descthree: todayDescThree,
            descfour: todayDescFour
        }
    }

         

    // this allows it to change topics after a new day change
    componentDidMount() {
        setInterval( () => {
            window.localStorage.setItem("time", new Date().toLocaleString())
          this.setState({
            curTime : new Date().toLocaleString(),
          })
        },1000)

        var now = window.localStorage.getItem("nowDate")
        

        var newDate = new Date().getDate()

        if(String(now) === "null"){
            now = window.localStorage.setItem("nowDate", newDate)
        }

        if(now != newDate){
        
            window.localStorage.setItem("nowDate", newDate)
            
            changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
            window.location.reload(false);
        }
       
      }  

    // this function is the onClick function the button calls that randomizes the topic displaye on screen
    operation(){
       
        let temp = 0

       TopicData.map(function(topics,index){
            temp = index
            return temp
        })
        //length of indexes #
        let num = temp + 1
        
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
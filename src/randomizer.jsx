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





//var date1 = 31

/*
var currentT = TopicData[0].name
var currentDO = TopicData[0].descOne
var currentDT = TopicData[0].descTwo
var currentDTH = TopicData[0].descThree
var currentDF = TopicData[0].descFour
*/


    // Yippee! We can use localStorage awesomeness
var currentT = window.localStorage.getItem('topic')
var currentDO = window.localStorage.getItem('descone')
var currentDT = window.localStorage.getItem('desctwo')
var currentDTH = window.localStorage.getItem('descthree')
var currentDF = window.localStorage.getItem('descfour')



/*
if (String(currentT) === "null"){
    var test = changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
    
    window.localStorage.setItem('topic', test[0])
    window.localStorage.setItem('descone', test[1])
    window.localStorage.setItem('desctwo', test[2])
    window.localStorage.setItem('descthree', test[3])
    window.localStorage.setItem('descfour', test[4])
}
else{*/
var test1 = [currentT, currentDO, currentDT, currentDTH, currentDF]


    // Yippee! We can use localStorage awesomeness
window.localStorage.setItem('topic', test1[0])
window.localStorage.setItem('descone', test1[1])
window.localStorage.setItem('desctwo', test1[2])
window.localStorage.setItem('descthree', test1[3])
window.localStorage.setItem('descfour', test1[4])


    
//}


//window.localStorage.setItem('date', String(date1));
 
/*
var currentDate = window.localStorage.getItem('date')
window.localStorage.setItem('date', String(4))
//localStorage.currentDate = date1
var noUpdate = 0

function checkDate(){
    var newDate = new Date().getDate()

    if (newDate > window.localStorage.getItem("date")){
        window.localStorage.setItem("date", newDate)
        return changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
    }
    else{
        return noUpdate
    }
}
function checkTime(){
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()

    if (Number(hours) === 15 && Number(minutes) === 5){
        
        return changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
    }
    else{
        return noUpdate
    } 
}*/



/* checks if one day has passed. 
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


 some function which should run once a day
function runOncePerDay(){
    if( !hasOneDayPassed() ) return false;
    else return changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
    
}
*/




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

    // Yippee! We can use localStorage awesomeness

var todayTopic = window.localStorage.getItem('topic')
var todayDescOne = window.localStorage.getItem('descone')
var todayDescTwo = window.localStorage.getItem('desctwo')
var todayDescThree = window.localStorage.getItem('descthree')
var todayDescFour = window.localStorage.getItem('descfour')





export class Randomizer extends React.Component{
    constructor(){
        super()
        
       // window.location.reload(false);
    
        //var update = checkTime()

        this.state = {
            curTime: setInterval( () => { new Date().toLocaleString()},1000 ),
            topic: todayTopic,
            descone: todayDescOne,
            desctwo: todayDescTwo,
            descthree: todayDescThree,
            descfour: todayDescFour
        }

/*
        if (typeof update !== "number"){
            this.state = {
          //topic : TopicData[random_num_on_start].name,
          //description: TopicData[random_num_on_start].description
            curTime: setInterval( () => { new Date().toLocaleString()}, 1000 ),
            topic: update[0],
            descone: update[1],
            desctwo: update[2],
            descthree: update[3],
            descfour: update[4],   
            }
        }

        else{
            this.state = {
            curTime: setInterval( () => { new Date().toLocaleString()}, 1000 ),
            topic: todayTopic,
            descone: todayDescOne,
            desctwo: todayDescTwo,
            descthree: todayDescThree,
            descfour: todayDescFour
            }
        }*/
       
    }


    /*string: 6/6/2020 3:10:34 PM
    shouldComponentUpdate(){
        var str = String(this.state.curTime)
        var temp = str.split(" ")
        console.log(temp)
        var temp2 = temp[1].split(":")
        if (temp2[0] === "23" && temp2[1] === "59" && temp2[2] === "1"){

            return true
        }
        else{
            return false
        }
    }*/
   

    // this allows it to change topic after a new day change
    componentDidMount() {
        setInterval( () => {
            window.localStorage.setItem("time", new Date().toLocaleString())
          this.setState({
            curTime : new Date().toLocaleString(),
          })
        },1000)

        var now = window.localStorage.getItem("nowDate")
        

        var newDate = new Date().getMinutes()

        if(String(now) === "null"){
            now = window.localStorage.setItem("nowDate", newDate)
        }

        if(now < newDate){
        
            window.localStorage.setItem("nowDate", newDate)
            
            changeTopic(currentT, currentDO, currentDT, currentDTH, currentDF)
            window.location.reload(false);
        }
       
      /*  var str =  window.localStorage.getItem("time")
        var str1 = str.split("/")
        var temp = str1
        var testMins = str1[2].split(":") */

      
        /*var temp2 = temp[1].split(":")
        this.setState({
            test: temp[0],
            test1: temp[1],
            test2: testMins[1]
        })*/
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
  
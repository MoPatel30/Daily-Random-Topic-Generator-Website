import React from 'react';
import './App.css';



export class App extends React.Component{
    render(){
        return(
            <div>
                <h1 id = "title"> Random Topic Generator </h1>
            </div>
        )
    }
}

export class Timer extends React.Component{
    constructor(props){
        super()
        this.state = {
            date: ''
        }
    }
    componentDidMount() {
        var that = this;

        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        if (min < 10){
            min = '0' + min
        }
        
        if (sec < 10){
            sec = '0' + sec
        }

        if (hours < 10){
            hours = '0' + hours
        }

        that.setState({
        //Setting the value of the date time
        date:
            month + '/' + date + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
        
      }

    render(){
        return(
            <div>
                <h4 id = "date" >{this.state.date}</h4>
                
            </div>
        )
    }
} 


export class TopicName extends React.Component{
    render(){
        return(
            <div id = "topic-name">
                <p style = {{color: "whitesmoke", fontSize: "42px", textAlign: "left", fontWeight: "500"}}> <em> Topic of the Day: Galileo Galilei </em></p>
            </div>
        )
    }
}

export class Topic extends React.Component{
    render(){
        return(
            <div id = "topic">
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

            </div>
        )
    }
}


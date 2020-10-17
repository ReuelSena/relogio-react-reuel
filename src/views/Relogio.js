import React, { Component } from 'react';
import './Relogio.css';

class Relogio extends Component {


  constructor(props){
    super(props);
    this.state ={
    time: new Date().toLocaleTimeString()
    }
    }

    componentDidMount() {
    this.intervalID = setInterval(() =>
    this.updateClock(),
    1000
    );
    }
    
    componentWillUnmount(){
    clearInterval(this.intervalID)
    }
    
    updateClock(){
    this.setState({
    time: new Date().toLocaleTimeString()
    });
  }

    render() {

      return (
        <div className="Body-relogio">
          <h2 className="Relogio-title"> Relogio </h2>
          
          <div>
          <h1 className="Relogio-display">
            {this.state.time}
          </h1> 
          
          </div>
        </div>
      );
    }
  }

export default Relogio;

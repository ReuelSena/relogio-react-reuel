import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgSandClock, CgAlarm } from "react-icons/cg";
import Relogio  from './views/Relogio';
import Cronometro from './views/Cronometro';
import Temporizador from './views/Temporizador';




class App extends Component {
  
  
  render() {
    return (
      
      <div className="Body-app">
        
        
        
        
        
        <div className="button-Container">
        <Link to='/' className="button"><AiOutlineClockCircle /></Link>
        <Link to='/Cronometro' className="button"><CgAlarm /></Link>
        <Link to='/Temporizador' className="button"><CgSandClock /></Link>
        
        </div>
        <Switch>
          <Route exact path='/' component={ Relogio } />
          <Route path='/Cronometro' component={ Cronometro } />
          <Route path='/Temporizador' component={ Temporizador } />
          
        </Switch>
        
  
      </div>
    );
  }
}

export default App;

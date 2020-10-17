import React, { Component } from 'react';
import { BsFillPlayFill , BsFillStopFill , BsFillTrashFill} from "react-icons/bs";
import { MdLoop } from "react-icons/md";

import "./Cronometro.css";


class Cronometro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      running: false,
      intervals: []
    };
  }

  start() {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  stop() {
    this.setState({ running: false });
    clearInterval(this.watch);
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  reset() {
    this.setState({
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      running: false
    });
  }

  calculate() {
    this.setState({ miliseconds: (this.state.miliseconds += 1) });
    if (this.state.miliseconds >= 100) {
      this.setState({ seconds: (this.state.seconds += 1) });
      this.setState({ miliseconds: (this.state.miliseconds = 0) });
    }
    if (this.state.seconds >= 60) {
      this.setState({ minutes: (this.state.minutes += 1) });
      this.setState({ seconds: (this.state.seconds = 0) });
    }
  }

  addTime() {
    this.setState({
      intervals: this.state.intervals.concat([
        `: ${pad0(this.state.minutes)}:${pad0(this.state.seconds)}:${pad0(
          Math.floor(this.state.miliseconds)
        )}`
      ])
    });
  }

  clearTimeList() {
    this.setState({
      intervals: []
    });
  }

  render() {
    return (
      <div className="Body-cronometro">
         <h2 className="Cronometro-title"> Cronometro </h2>
          
            <div>
                <div className="Cronometro-display">
                  {pad0(this.state.minutes)} : {pad0(this.state.seconds)} : {pad0(Math.floor(this.state.miliseconds))}
                </div>

                <div className="Texto-itens-container-cronometro">
                    <h3 className="Texto-itens-cronometro">Minutos</h3>
                    <h3 className="Texto-itens-cronometro">Segundos</h3>
                    <h3 className="Texto-itens-cronometro">MiliSegundos</h3>
                </div>

                <div className="Btn-Ccontainer">
                <button className="Btn-cronometro" id="start" onClick={this.start.bind(this)}><BsFillPlayFill/></button>
                <button className="Btn-cronometro-parar" id="stop" onClick={this.stop.bind(this)}><BsFillStopFill/></button>
                <button className="Btn-cronometro-reset" id="reset" onClick={this.reset.bind(this)}><MdLoop/></button>
                <button className="Btn-cronometro-parcial" id="add" onClick={this.addTime.bind(this)}>PARCIAL</button>
                <button className="Btn-cronometro-reset" id="clear" onClick={this.clearTimeList.bind(this)}><BsFillTrashFill/></button>
                </div>   
          
           </div>

        <ul className="parciais">
          {this.state.intervals.map((interval, i) => (
            <li key={i}>
              {i + 1} Parcial {interval} 
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

let cronometro = React.createElement(Cronometro);

export default Cronometro;

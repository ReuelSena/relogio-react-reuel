import React, { Component } from 'react';
import './Temporizador.css';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BsFillPlayFill , BsFillStopFill} from "react-icons/bs";
import { MdLoop } from "react-icons/md";

class Temporizador extends Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("A contagem terminou!!!");
      }
    }, 10);
  };
 
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };


  render() {

    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Body-temporizador">
        <h2 className="Temporizador-title"> Temporizador </h2>
                  
          <div>
          
            <button onClick={() => this.adjustTimer("incHours")} className="Button-up"><AiFillCaretUp /></button>
            <button onClick={() => this.adjustTimer("incMinutes")} className="Button-up"><AiFillCaretUp /></button>
            <button onClick={() => this.adjustTimer("incSeconds")} className="Button-up"><AiFillCaretUp /></button>
          </div>
          <div className="Temporizador-display">
                  {hours} : {minutes} : {seconds}
          </div>
          
          <div className="Texto-itens-container">
              <h3 className="Texto-itens">Horas</h3>
              <h3 className="Texto-itens">Minutos</h3>
              <h3 className="Texto-itens">Segundos</h3>
          </div>


          <div>
            <button onClick={() => this.adjustTimer("decHours")} className="Button-down"><AiFillCaretDown /></button>
            <button onClick={() => this.adjustTimer("decMinutes")} className="Button-down"><AiFillCaretDown /></button>
            <button onClick={() => this.adjustTimer("decSeconds")} className="Button-down"><AiFillCaretDown /></button>
          </div>

          <div className="Btn-Tcontainer">
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <button onClick={this.startTimer} className="Btn-temporizador"><BsFillPlayFill/></button>
            )}
          {timerOn === true && timerTime >= 1000 && (
            <button onClick={this.stopTimer} className="Btn-temporizador-parar"><BsFillStopFill/></button>
            )}
          {timerOn === false &&
            (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
              <button onClick={this.startTimer} className="Btn-temporizador"><BsFillPlayFill/></button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            (timerStart !== timerTime && timerStart > 0) && (
              <button onClick={this.resetTimer} className="Btn-temporizador-reset"><MdLoop/></button>
            )}
            </div>
      </div>
    );
  }
}

export default Temporizador;

import React, {Component} from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import Midday from './Midday';
import './Timer.css';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    }
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    let time = this.state.time;
    return (
      <div className="time-container">
        <div className="time--left">
          <Hours className="time__hours" hours={time.getHours()}/>
          <Seconds className="time__seconds" seconds={time.getSeconds()} /> 
          <Minutes className="time__minutes" minutes={time.getMinutes()} />
          <Midday className="time__midday" hours={time.getHours()} />         
        </div>
      </div>
    );
  }
}

export default Timer;
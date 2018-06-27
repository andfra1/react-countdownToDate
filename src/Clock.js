import React, { Component} from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0
    }
  }

  componentWillMount() {
    this.getTime(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTime(this.props.deadline), 1000);
  }

  leading0(num) {
    return isNaN(num) ? 'Can\'t count' : (num < 10 ? (num >= 0 ? '0' + num : (num > -10 ? '-0' + (-num) : num)) : num);
  }

  getTime(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const secs = Math.floor((time/1000) % 60);
    const mins = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, mins, secs});
  }

  render() {
    return (
    <div className="app-clock">
      <div className = "clock clock-days">
        {this.leading0(this.state.days)} days
      </div>
      <div className = "clock clock-hours">
        {this.leading0(this.state.hours)} hours
      </div>
      <div className = "clock clock-mins">
        {this.leading0(this.state.mins)} mins
      </div>
      <div className = "clock clock-secs">
        {this.leading0(this.state.secs)} secs
      </div>
    </div>
    )
  }
}

export default Clock;
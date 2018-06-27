import React, { Component} from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  today(t) {
    const y = t.getFullYear();
    const m = t.getMonth()+1;
    const d = t.getDate()+1;

    return y + '.' + m + '.' + d;
  }

  constructor(title) {
    super(title);
    this.state = {
      deadline: this.today(new Date())
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }
  render() {
    return (
    <div className = "app" >
      <div className = "app-title" >
      Countdown to {this.state.deadline}
      </div>
      <Clock 
        deadline = {this.state.deadline}
      />
      <div className="app-input">
      <input type = "text" placeholder = "new date, eg. 2020.1.12" onChange={event => this.setState({ newDeadline: event.target.value})} />
      <button onClick={()=>this.changeDeadline()} type="submit">submit</button>
      </div>
    </div>
    )
  }
}

export default App;
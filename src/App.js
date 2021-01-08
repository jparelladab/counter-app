import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {
  state = {
    counters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  }

  constructor(){
    super();
    console.log('App - Constructor');
  }

  componentDidMount(){
    //ajax calls
    console.log('App - DidMount');
  }

  handleDelete = (counterId) => {
    const countersToKeep = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: countersToKeep});

    /*if instead of countersToKeep we name it also counters, we can do:
      this.setState({counters})*/
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value ++;
    this.setState({counters});
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
      counters[index].value --;
      this.setState({counters});

  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  render(){
    console.log('App - Render')
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

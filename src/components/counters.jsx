import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  constructor(){
    super();
    console.log('counters constructor');
  }

  componentDidMount(){
    //the place to make ajax calls to get data from the server and pass it to the state
    //this.setState({})
    console.log('counters did mount');
  }

  render(){

    console.log('Counters - Render');

    //Using object destructuring
    const {onReset, onDelete, onIncrement, onDecrement, counters} = this.props;

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >Reset
        </button>
        { counters.map ( counter =>

            <Counter
              key={counter.id}
              onDelete={ onDelete }

              /*instead of passing each prop separately we can pass the whole counter object*/

              /*value={counter.value}
              id={counter.id}*/

              onIncrement={ onIncrement }
              onDecrement={ onDecrement }

              counter={counter}
            >
              <p>Child</p>
            </Counter>

          ) }
      </div>
    );
  }
}

export default Counters;

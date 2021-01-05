import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  // constructor(){
  //   // super();
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  //   // this.state.count = 0;
  // }

  render(){

      return (
      <div>
        <span style={ this.styles } className={ this.spanClass() }>{ this.formatCount() }</span>

        {/*calling event handler as reference, no parenthesis*/}
        <button onClick={ this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>

        {/*rendring a list*/}
        <ul>
          { this.state.tags.map( tag => <li key={tag}>{ tag }</li> ) }
        </ul>

        {/*otherwise write the function*/}
        <button onClick={ () => this.handleIncrement2('product') } className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  /*conditional rendering through method calls*/
  formatCount(){
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }

  /*if arrow function used, no need to bind the method to state*/
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleIncrement2 = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  }

  spanClass(){
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }


}


export default Counter;

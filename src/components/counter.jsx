import React, { Component } from 'react';

class Counter extends Component {

  /*if we want this component to be a fully controlled component we need to get rid of its state*/
  // state = {
  //   value: this.props.counter.value,
  //   id: this.props.counter.id,
  //   tags: ['tag1', 'tag2', 'tag3']
  // };

  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };

  // used to bind event handler to state if needed
  // constructor(){
  //   // super();
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  //   // this.state.value = 0;
  // }

//Constructor is a good place for modifying props before mounting
  constructor(){
    super();
    console.log('counter constructor');
    // props.counter.value = props.counter.value + 1;
  }

  componentDidMount(){
    //the place to make ajax calls to get data from the server and pass it to the state
    //this.setState({})
    console.log('counter did mount');
  }

  componentDidUpdate(prevProps, prevState){
    //check changes and make new ajax call accordingly
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    //For example:
    if (prevProps.counter.value !== this.props.counter.value){
      //Ajax call and get new data
    }



    console.log('counter did update');
  }

  componentWillUnmount(){
    console.log('counter will unmount');
  }

  render(){

    console.log('Counter - Render');
      return (
      <div>

        {/*show children passed from parent component*/}
{/*        {this.props.children}*/}

        <span style={ this.styles } className={ this.spanClass() }>{ this.formatValue() }</span>

        {/*calling event handler as reference, no parenthesis*/}
        <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm m-1">+</button>
        <button onClick={ () => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm" disabled={ this.deactivateDecrement()} >-</button>

        {/*rendring a list*/}
        {/*<ul>
          { this.state.tags.map( tag => <li key={tag}>{ tag }</li> ) }
        </ul>*/}

        {/*otherwise write the function inside onClick */}
        <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-3">X</button>
      </div>
    );
  }

  /*conditional rendering through method calls*/
  formatValue(){
    // we no longer have a state because it's fully controlled
    // const {value} = this.state;
    const {value} = this.props.counter;
    // console.log(this.props);
    return value === 0 ? 'Zero' : value;
  }

  deactivateDecrement(){
    const {value} = this.props.counter;
    return value === 0 ? true : false;
  }

  /*if arrow function used, no need to bind the method to state*/
  handleIncrement = () => {
    this.setState({ value: this.props.counter.value + 1 });
  }

  handleIncrement2 = (product) => {
    console.log(product);
    this.setState({ value: this.props.counter.value + 1 });
  }

  spanClass(){
    let classes = 'badge m-2 badge-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    return classes;
  }


}


export default Counter;

import React, { Component } from 'react';
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
    const counters = [...this.state.counters]; //the spread operator CLONES the original, but if we modify it directly it will also change the state accordingly
    // This happens because when you use the ... operator it creates a shallow copy of the array and not a deep copy.
          // let val = [{key: "value"}, {key: "value"}, {key: "value"}]
          // let copy = [...val];
          // let isEqualShallow = val[0] == copy[0]
          // console.log(isEqualShallow)
    // so you can see how that first object in the copy is equal to the other object. But if you use spread operators on the internal objects as well then you get a deep copy.
        // let val = [{key: "value"}, {key: "value"}, {key: "value"}]
        // let copy = val.map(item => {
        //   return {...item}
        // })
        // let isEqualDeep = val[0] == copy[0]
        // console.log(isEqualDeep)
 
 
        // The arrays you are working with are arrays of objects. Objects are reference types, which means that really, your arrays contain references to the objects.

        // When you spread the array into a new array, you are not cloning the objects, just their references, therefore when you write clone[appIndex], you are referring to the same object that is contained in both arrays.
        
        // To get around this, you can use the map method to clone the object that you want to change:
        
        // const newArray = ApplicationsData.map(
        //   (item, index) =>
        //     index == appIndex ?
        //       ({
        //          ...item,
        //          isActive: true,
        //          newProp: true,
        //          isMinimized: false
        //        }) : 
        //     item
        // );
        // This will return the original object reference for all items, except for the specific item that you want to change. In that case, it creates a brand new object and returns that reference, so the original object is left untouched.
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // we have to assign a clone to avoid changing the state directly
    counters[index].value ++;
    this.setState({counters});
  }

  handleDecrement = (counter) => {
    //we get a CLONE of the counters array thanks to the spread operator, BUT....(see handleINcrement)
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


// import React, { Component } from 'react';


//Stateless functional component (no class, no state)
//Remove pass props as argument and remove .this
//We can also destructure props in order to avoid repeating props.[...]
// const NavBar = (props) => {
  const NavBar = ({totalCounters}) => {
    console.log('NavBar - Render');

    return (
    <div>
      <nav className="navbar navbar-light bg-info">
        <span className="navbar-brand mb-0 h1">Number of Counters: </span>
        <span className="bade badge-pill badge-secondary">{totalCounters}</span>
      </nav>
    </div>
    );

}


export default NavBar;

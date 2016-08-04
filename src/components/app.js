import React from 'react';
import Nav from './navbar';
/*
A simple component that simply renders a NavBar component and the {props.children}
passed in by the router

    // {this.props.children} in line 10
*/
const App = (props) =>
  <div className="app">
    <Nav />
    {props.children}
  </div>;

export default App;

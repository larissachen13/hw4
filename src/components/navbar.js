import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div className="nav">
    <Link className="link" to="/">Home</Link>
    <Link className="link" className="add-button "to="posts/new">Add</Link>
  </div>
);

export default Nav;

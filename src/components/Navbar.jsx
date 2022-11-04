import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h1>React Books App</h1>
        </Link>
      </div>
      <div>
        <Link to="/favourites">
          <h3>Your Favourites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

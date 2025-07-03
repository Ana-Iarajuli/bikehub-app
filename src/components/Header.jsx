import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Bikes">Bikes</Link>
        <Link to="/about">About</Link>
      </nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;

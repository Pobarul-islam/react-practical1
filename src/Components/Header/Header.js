import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <h1>This is Header Page</h1>
        <Link to={"/friends"}>Friends</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/friend"}>friendDetail</Link>
      </div>
    );
};

export default Header;
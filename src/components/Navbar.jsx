import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <div>Navbar</div>
        <div>
          <Link to="home">Home</Link>
          <Link to="About">About</Link>
          <Link to="Us">Us</Link>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Navbar
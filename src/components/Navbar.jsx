import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  console.log("nav reRendered")
  return (
    <>
      <nav>
        <div>Navbar</div>
        <div>
          <Link to="/">Home</Link>
          <Link to="About">About</Link>
          <Link to="Us">Us</Link>
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Navbar
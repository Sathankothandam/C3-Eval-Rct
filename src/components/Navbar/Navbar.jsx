import React, { useState } from "react";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  const [count,setCount]=useState(0)
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{count}</span>
      <button data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;

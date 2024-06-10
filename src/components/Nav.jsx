import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="p-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <Link to='/'>
          <div className="flex items-center font-sans text-3xl font-bold">
            <h1>HomeBuy</h1>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/loginScreen">Sign up / Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li tabindex="0">
          <a class="justify-between">
          Courses
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><Link to="/">Web Development</Link></li>
            <li><Link to="/">C</Link></li>
            <li><Link to="/">C++</Link></li>
            <li><Link to="/">JAVA</Link></li>
            <li><Link to="/">Python</Link></li>
          </ul>
        </li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div class="navbar bg-blue-300 font-bold ">
            <div class="navbar-start">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {menuItems}
                </ul>
              </div>
              <img src={logo} class="max-w-sm rounded-lg w-14" alt=''/>
              <Link to="/" class="btn btn-ghost normal-case text-xl">E-Learning</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal p-0">
                {menuItems}
              </ul>
            </div>
        </div>
    );
};

export default Navbar;
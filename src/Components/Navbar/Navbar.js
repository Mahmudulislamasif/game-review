import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar-parent-class'>
            <Link className='navbar-class col-md-2' to='/home'>Home</Link>
            <Link className='navbar-class col-md-2' to='/review'>Review</Link>
            <Link className='navbar-class col-md-2' to='/dashboard'>Dashboard</Link>
            <Link className='navbar-class col-md-2' to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Navbar;
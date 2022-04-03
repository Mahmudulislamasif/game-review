import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Navbar;
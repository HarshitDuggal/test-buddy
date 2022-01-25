import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav>
            <h2>Test Buddy</h2>
            <li>
                <Link to = '/login'>
                     <h3>Login</h3>
                </Link>
            </li>
            <li>
                <Link to = '/register'>
                    <h3>Register</h3>
                </Link>
            </li>
        </nav>
        </>
    );
}

export default Navbar;

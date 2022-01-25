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
            <li>
            <Link to = '/createquiz'>
                <h3>Create Quiz</h3>
            </Link>
            </li>
            <li>
            <Link to = '/quiz'>
                <h3> Quiz</h3>
            </Link>
            </li>
        </nav>
        </>
    );
}

export default Navbar;

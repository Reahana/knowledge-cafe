import React from 'react';
import './Header.css'
import login from '../../images/login_img.jpg'

const Header = () => {
    return (
        <div>
        <nav className='header'>
            <h1>Knowledge Cafe</h1>
            <img src={login} alt="" />
        </nav>
        <hr />
        </div>
        
    );
};

export default Header;
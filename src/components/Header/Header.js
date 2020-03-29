import React from 'react';
import header from '../../images/header/header2.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header" >
            <img src={header} alt=""/>
            <nav>
                <a href="home">Home</a>
                <a href="category">Category</a>
                <a href="country">Country</a> 
                <a href="fun">Fun</a>
                <a href="rules">Rules</a>
                <a href="about">About us</a>
            </nav>
            <div className="search-area">
                <input className="search-box" type="text" placeholder="Type anything to search.." />
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">The Era of A.I is here! Everything is going to change.</h1>
      <p>The beginnings of modern AI can be traced to classical philosophers' attempts to describe human thinking as a symbolic system. But the field of AI wasn't formally founded until 1956, at a conference at Dartmouth College, in Hanover, New Hampshire, where the term "artificial intelligence" was coined.</p>
    </div>

    <div className="header-image">
      <img src={ai} alt=''/>
    </div>
  </div>
);

export default Header;

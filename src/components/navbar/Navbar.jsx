import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatisAI">What is AI</a></p>


  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="logo">
      <div className="navbar">
        <div className="navbar-links_logo">
          <h1>Tahir.</h1>
        </div>
        <div className="navbar-links">

          <div className="navbar-links_container">
            <Menu />

          </div>

        </div>

        <div className="navbar-sign">
          <p><a href="#features">About AI</a></p>
          <button type="button">Enter</button>

        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="navbar-menu_container slide-in-elliptic-top-fwd">
              <div className="navbar-menu_container-links">

                <Menu />


              </div>
              <div className="navbar-menu_container-links-sign">
                <p><a href="#features">About AI</a></p>
                <button type="button">Enter</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

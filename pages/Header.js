import React from "react";
// import Image from 'next/image'
// import { logo } from '../assets/Jazz Logo.png'

const Header = () => {

  return (
    <div className="Header">
      <div className="headerContainer">
        <header>
          <div className="headMenu">
            <div className="menuLeft">
              <a href="#" className="homeLink">
                Utah Jazz Premium Seating
              </a>
            </div>
            <nav>
              <a className="menuLinks">Luxury Suites</a>
              <a className="menuLinks">Exclusive Clubs</a>
              <a className="menuLinks">Contact Us</a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

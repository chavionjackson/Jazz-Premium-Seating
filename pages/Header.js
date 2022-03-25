import React from "react";
// import Image from 'next/image'
// import { logo } from '../assets/Jazz Logo.png'

const Header = () => {

  return (
    <div className="pb-56 bg-black">
      <div className="headerContainer">
        <header>
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <a href="#" className="m-6 text-sm text-white uppercase">
                Utah Jazz Premium Seating
              </a>
            </div>
            <nav>
              <a className="px-3 float-left block text-sm text-[#fbed2a]">
                Luxury Suites
              </a>
              <a className="px-3 float-left block text-sm text-[#fbed2a]">
                Exclusive Clubs
              </a>
              <a className="px-3 float-left block text-sm text-[#fbed2a]">
                Contact Us
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

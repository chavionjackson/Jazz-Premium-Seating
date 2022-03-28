import React from "react";
// import Image from 'next/image'
// import { logo } from '../assets/Jazz Logo.png'

const Header = () => {
  return (
    <div className="pb-4">
      <div className="bg-black ">
        <header className="">
          <div className="flex items-center justify-between h-10 mb-8 ml-24 mr-24">
            <div className="flex items-center">
              <a href="/Homepage/HomePage" className="m-6 text-sm text-white uppercase">
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
      <div className="flex items-center justify-between mt-6 mb-6 mr-28 ml-28">
        <h1 className="text-3xl font-bold uppercase">
          Eide Bailly Suite Level
        </h1>
        <div className="flex items-center justify-between mr-4 font-bold headingLink">
          <a className="pt-1 pb-1 pl-4 pr-4 text-xl rounded-md linkButton">
            Download Info
          </a>
          <a className="pt-1 pb-1 pl-4 pr-4 text-xl rounded-md linkButton">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

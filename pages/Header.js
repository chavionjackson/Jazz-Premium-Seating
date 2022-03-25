import React from "react";
// import Image from 'next/image'
// import { logo } from '../assets/Jazz Logo.png'

const Header = () => {

  return (
    <div className="pb-56 bg-black">
      <div className="headerContainer">
        <header className="border-b-2">
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
        <div className="flex items-center justify-center text-center text-white test">
          <span>
            <h1 className="mt-32 text-6xl font-bold uppercase">
              Premium Seating
            </h1>
            <p className="text-4xl uppercase text-[#fbed2a] mb-4">
              The best way to enjoy all the excitment
            </p>
            <p className="mb-8 text-xl font-light leading-6">
              Whether you’re entertaining business clients, closing a major
              deal, or socializing with family and friends, a luxury suite
              provides all the convenience, comfort and service you desire. As
              the home of the Utah Jazz and the country’s most popular touring
              musical acts and family shows, Vivint Arena is the place to meet,
              greet, see and be seen in Utah.
            </p>
            <a className= "button">Contact Us</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;

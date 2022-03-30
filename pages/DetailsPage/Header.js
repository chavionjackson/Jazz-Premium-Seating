import Link from "next/link";
import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const Header = () => {
  return (
    <div className="pb-4">
      <div className="bg-black ">
        <header className="">
          <div className="flex items-center justify-between h-10 mb-8 ml-24 mr-24">
            <div className="flex items-center">
              <Link href="/Homepage/HomePage">
                <a className="m-6 text-sm text-white uppercase">
                  Utah Jazz Premium Seating
                </a>
              </Link>
            </div>
            <nav>
              <Link href="/DetailsPage/DetailsPage">
                <a className="px-3 float-left block text-sm text-[#fbed2a]">
                  Luxury Suites
                </a>
              </Link>
              <Link href="/DetailsPage/DetailsPage">
                <a className="px-3 float-left block text-sm text-[#fbed2a]">
                  Exclusive Clubs
                </a>
              </Link>
              <Link href="">
                <a className="px-3 float-left block text-sm text-[#fbed2a]">
                  Contact Us
                </a>
              </Link>
            </nav>
          </div>
        </header>
      </div>
      <div className="flex items-center justify-between mt-6 mb-6 mr-28 ml-28">
        <h1 className="text-3xl font-bold uppercase">
          Eide Bailly Suite Level
        </h1>
        <div className="flex items-center justify-between mr-4 font-bold headingLink">
          <button className="inline-flex pt-1 pb-1 pl-4 pr-4 text-xl font-bold align-baseline rounded-md linkButton">
            <AiOutlineFilePdf className="mt-1 mr-2" />
            Download Info
          </button>
          <button className="pt-1 pb-1 pl-4 pr-4 text-xl font-bold rounded-md linkButton">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

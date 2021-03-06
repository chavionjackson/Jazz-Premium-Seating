import React from 'react'
import { FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <footer className="pt-4 pb-4 bg-[#282828]">
      <div className="w-9/12 ml-auto mr-auto">
        <h2 className="text-[#fff] uppercase text-3xl mt-8 mb-8">Contact Us</h2>
        <div className="flex items-center justify-between footerWrapper">
          <div className="w-2/5">
            <div className="flex items-baseline gap-2 mb-4 leading-8">
              <FaPhoneSquareAlt className="text-[#fbed2a] text-lg" />
              <span href="#" className="mb-4 text-lg font-bold text-[#fff]">
                801-325-2201
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-8 leading-8">
              <FaEnvelope className="text-[#fbed2a] text-lg" />
              <span href="#" className="mb-4 text-lg font-bold text-[#fff]">
                bizdev@utahjazz.com
              </span>
            </div>
            <p className="text-base text-[#fff] leading-6">
              With options like single-game tickets, suite rentals and special
              group rates, experiencing Utah Jazz basketball has never been more
              convenient! Just let us know what you’re interested in and we can
              customize a package to fit your group and budget.
            </p>
          </div>
          <div className="w-6/12">
            <form>
              <div className="w-full text-lg">
                <label className="input">First Name *</label>
                <br />
                <input className="inputText"></input>
                <br />
                <label className="input">Last Name *</label>
                <br />
                <input className="inputText"></input>
                <label className="input">Email Address *</label>
                <br />
                <input className="inputText"></input>
                <br />
                <label className="input">Phone Number *</label>
                <br />
                <input className="inputText"></input>
                <br />
                <label className="input">
                  What type of seating are you interested in?
                </label>
                <br />
                <select className="inputText">
                  <option>Single Games</option>
                  <option>Mini Plans</option>
                  <option>Group Tickets</option>
                  <option>Premium Seating</option>
                  <option>Season Tickets</option>
                </select>
                <br />
                <label className="input">Comments</label>
                <br />
                <input className="inputText"></input>
                <br />
              </div>
              <button
                type="submit"
                className="text-xl mb-12 font-bold pt-1.5 pb-1.5 pr-4 pl-4 mt-4 rounded border-none bg-[#fbed2a]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact
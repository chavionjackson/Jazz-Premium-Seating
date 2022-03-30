import React from 'react'
import { MdDirectionsCar } from "react-icons/md";
import { FaMapSigns } from "react-icons/fa";


const Parking = () => {
  return (
    <div className="flex items-center pt-16 pb-16 parkingContainer">
      <h2 className="text-3xl font-bold uppercase">Parking & Check-In</h2>
      <div className="grid gap-20 contentsContainer">
        <div className="flex">
          <MdDirectionsCar className="mr-2 text-[#fbed2a] text-2xl" />
          <span>
            <p className="infoText">
              VIP parking in the Park Place lot located right next to Vivint
              Smart Home Arena
            </p>
            <button className="text-sm font-bold text-[black] bg-[#fbed2a] rounded pt-1 pb-1 pr-4 pl-4 cursor-pointer no-underline">
              View Parking Map
            </button>
          </span>
        </div>
        <div className="flex">
          <FaMapSigns className="mr-2 text-[#fbed2a] text-2xl" />
          <span>
            <p className="infoText">
              Easy check-in: Talk to the host at any suite level (level 4)
              entrance to check-in
            </p>
            <button className="text-sm font-bold text-[black] bg-[#fbed2a] rounded pt-1 pb-1 pr-4 pl-4 cursor-pointer no-underline">
              View Check-in Locations
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Parking
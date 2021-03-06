import React from "react";
import {
  MdLocationPin,
  MdPeople,
  MdLightbulbOutline,
} from "react-icons/md";
import Benefits from "./DetailsContent/Benefits";
import Parking from "./DetailsContent/Parking";
import PossibleUses from "./DetailsContent/PossibleUses";

const DetailsContent = () => {
  return (
    <div className="bg-[black]">
      <div className="text-[#fff] w-9/12 mr-auto ml-auto">
        <div className="flex items-baseline justify-between w-full pt-20 pb-16 pr-8 infoContainer">
          <h2 className="text-3xl font-bold uppercase">About</h2>
          <div className="aboutContent">
            <MdLocationPin className="mr-2 text-[#fbed2a] text-2xl" />
            <span>
              <h2 className="infoHeading">Location</h2>
              <p className="infoText">Suite Level(Level 4)</p>
              <a className="text-sm font-bold text-[black] bg-[#fbed2a] rounded pt-1 pb-1 pr-4 pl-4 cursor-pointer no-underline">
                View Arena Map
              </a>
            </span>
          </div>
          <div className="aboutContent">
            <MdPeople className="mr-2 text-[#fbed2a] text-2xl" />
            <span>
              <h2 className="infoHeading">Capacity</h2>
              <p className="infoText">
                Accommodates 18–32
                <br />
                people
              </p>
            </span>
          </div>
          <div className="aboutContent">
            <MdLightbulbOutline className="mr-2 text-[#fbed2a] text-2xl" />
            <span>
              <h2 className="infoHeading">Event Availability</h2>
              <p className="infoText">
                Utah Jazz Games
                <br />
                (including playoffs)
              </p>
              <p className="infoText">Concerts and select special events</p>
            </span>
          </div>
        </div>
        <Benefits />
        <Parking />
        <PossibleUses />
      </div>
    </div>
  );
};

export default DetailsContent;

import React from "react";
import { MdCheckCircle } from "react-icons/md";
import Data from "../../../AppData/DetailsData";


const Benefits = () => {
  return (
    <div className="flex pt-20 pb-16 benefitsContainer">
      <h2 className="text-3xl font-bold uppercase">Benefits & Amenities</h2>
      <div className="grid benefitsTable gap-x-8">
        {Data.map((info) => (
          <div key="info" className="flex">
            <MdCheckCircle className="mr-2 text-[#fbed2a] text-2xl" />
            <p className="infoText">{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;

import React from "react";
import Image from "next/image";
import suites from "./assets/suites.jpg";
import clubs from "./assets/clubs.jpg";

const Section1 = () => {
  return (
    <div className="relative flex justify-center -top-20">
      <div className="w-2/5 m-4 bg-black">
        <Image alt="luxurySuites" src={suites} />
        <div className="w-10/12 pt-4 pb-8 ml-8">
          <h2 className="text-[#fbed2a] text-xl uppercase">Luxury Suites</h2>
          <p className="pt-4 pb-8 text-base text-white">
            Your suite can enhance your corporate profile and give you an
            advantage over your competitors. It offers the chance to communicate
            your message in a luxurious setting while making entertaining as
            easy as it is elegant. Take advantage of the most unique and
            exciting way to entertain in Utah by becoming a Vivint Arena luxury
            suite holder.
          </p>
          <a
            href="/DetailsPage/DetailsPage"
            className="cardLink text-[#fbed2a] pt-1 pl-4 pr-4 pb-1 text-base uppercase rounded-md font-bold"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="w-2/5 m-4 bg-black">
        <Image alt="luxurySuites" src={clubs} />
        <div className="pt-4 pb-8 ml-8 cardText">
          <h2 className="uppercase text-[#fbed2a] text-xl">Exclusive Clubs</h2>
          <p className="pt-4 pb-8 text-base text-white">
            Membership into one of our exlusive clubs can enhance your corporate
            profile and give you an advantage over your competitors. It offers
            the chance to communicate your message in a luxurious setting while
            making entertaining as easy as it is elegant. Take advantage of the
            most unique and exciting way to entertain in Utah with one of our
            exclusive club memberships at Vivint Arena.
          </p>
          <a
            href="/DetailsPage/DetailsPage"
            className="cardLink text-[#fbed2a] pt-1 pl-4 pr-4 pb-1 text-base uppercase rounded-md font-bold"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;

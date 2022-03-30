import React from "react";

const Digital = () => {
  return (
    <div className="pt-16 pb-16 -mt-16 text-xl text-[#010101] bg-[#e3e5e3]">
      <div className="mt-0 mb-0 ml-36 mr-36">
        <div className="mb-3 text-2xl font-medium text-black uppercase">
          Digital Tickets
        </div>
        <p className="mt-0 mb-4 ml-0 mr-0 text-base">
          All tickets will be digital and accessible in the Utah Jazz + Vivint
          Arena App. Printed tickets will no longer be an option.
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="ticketsText">
            <p className="mt-0 mb-2 ml-0 mr-0 text-base">
              This move to digital-only has been made for several reasons:
            </p>
            <ul className="pl-10 mb-3 list-disc">
              <li className="text-base mb-1.5">
                Helps to prevent fraudulent tickets from being circulated
              </li>
              <li className="text-base mb-1.5">
                Increases safety and security by providing an easier way to
                track who’s using tickets and entering the arena
              </li>
              <li className="text-base mb-1.5">
                Allows for a convenient transfer process—you can transfer your
                tickets with the touch of a button
              </li>
            </ul>
            <p className="w-full mb-4 text-base leading-6">
              - Helps to prevent fraudulent tickets from being circulated.
              <br />- Increases safety and security by providing an easier way
              to track who’s using tickets and entering the arena.
              <br />- Allows for a convenient transfer process—you can transfer
              your tickets with the touch of a button.
            </p>
            <p className="w-11/12 mb-4 text-base">
              If you have questions or concerns about digital tickets, please
              contact your account representative.
            </p>
            <p>
              <button className="text-sm bg-[#fbed2a] font-bold pt-1 pb-1 pl-3 pr-3 rounded uppercase ticketsButton">
                Learn More About Digital Tickets
              </button>
            </p>
          </div>
          <div className="p-12">
            <div className="videoContainer">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/meGV_vYsjm0?rel=0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;

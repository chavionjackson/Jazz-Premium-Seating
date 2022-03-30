import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import Data from '../../../AppData/UsesData'

const PossibleUses = () => {
  return (
    <div className="pt-16 pb-16">
      <span className="flex items-center mb-8">
        <AiFillPlusCircle className="text-[#fbed2a] mr-2 text-3xl" />
        <h2 className="text-3xl font-bold uppercase">Possible Uses</h2>
      </span>
      <div className="grid usesGrid gap-x-20">
        {Data.map(({ header, content }) => (
          <div key={"usesData"} className="flex flex-col w-40">
            <h3 className="pb-2 text-xl font-bold usesSub">{header}</h3>
            <ul>
              {content.map((info) => (
                <li key={"uses"} className="mt-4 mb-4 ml-auto mr-auto text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PossibleUses
import React from 'react'
import Image from "next/image";
import toyota from "./assets/toyota.jpg";
import eidebailly2 from "./assets/eidebailly2.jpg";
import wcf from "./assets/wcf.jpg";
import courtside from "./assets/courtside.jpg";
import lexus from "./assets/lexus.jpg";
import courtclub from "./assets/courtclub.jpg";
import legends from "./assets/legends.jpg";


const ExclusieClubs = () => {
  return (
    <div className="pt-12 pb-12 bg-black">
      <div className="ml-36 mr-36">
        <div className="text-[#fbed2a] mb-4 text-3xl uppercase">
          Exclusive Clubs
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="suiteClubCards">
            <a href="#" className="card">
              <Image
                sizes="100vw"
                layout="fill"
                className="cardImg"
                alt=""
                src={toyota}
              />
              Toyota Club
            </a>
          </div>
          <div className="suiteClubCards">
            <a href="#" className="card">
              <Image
                layout="fill"
                className="cardImg"
                alt=""
                src={eidebailly2}
              />
              Eide Bailly Club
            </a>
          </div>

          <div className="suiteClubCards">
            <a href="#" className="card">
              <Image layout="fill" className="cardImg" alt="" src={wcf} />
              WCF Insurance Club
            </a>
          </div>

          <div className="suiteClubCards">
            <a href="#" className="card">
              <Image layout="fill" className="cardImg" alt="" src={lexus} />
              Lexus Club
            </a>
          </div>
          <div className="suiteClubCards">
            <a href="#" className="card">
              <Image layout="fill" className="cardImg" alt="" src={courtclub} />
              Courtside Club Presented By Entrata
            </a>
          </div>
          <div className="suiteClubCards">
            <a href="#" className="card">
              <Image layout="fill" className="cardImg" alt="" src={legends} />
              Legends Club Presented By Lgcy Power
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusieClubs
import React from "react";
import Image from "next/image";
import eidebailly from "./assets/eidebailly.jpg";
import udo from "./assets/udo.jpg";
import loge from "./assets/loge.jpg";
import courtside from "./assets/courtside.jpg";
import Link from "next/link";

const LuxurySuites = () => {
  return (
    <div className="pt-12 pb-12 bg-black">
      <div className="ml-36 mr-36">
        <div className="text-[#fbed2a] mb-4 text-3xl uppercase">
          Luxury Suites
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="suiteClubCards">
            <Link passHref href="/DetailsPage/DetailsPage">
              <span className="card">
                <Image
                  layout="fill"
                  className="cardImg"
                  alt=""
                  src={eidebailly}
                />
                Eide Bailly Suite
              </span>
            </Link>
          </div>
          <div className="suiteClubCards">
            <Link passHref href="/DetailsPage/DetailsPage">
              <span className="card">
                <Image layout="fill" className="cardImg" alt="" src={udo} />
                Level 3 Udo Lounge
              </span>
            </Link>
          </div>

          <div className="suiteClubCards">
            <Link passHref href="/DetailsPage/DetailsPage">
              <span className="card">
                <Image layout="fill" className="cardImg" alt="" src={loge} />
                Loge Boxes
              </span>
            </Link>
          </div>

          <div className="suiteClubCards">
            <Link passHref href="/DetailsPage/DetailsPage">
              <span className="card">
                <Image
                  layout="fill"
                  className="cardImg"
                  alt=""
                  src={courtside}
                />
                Courtside Suites
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxurySuites;

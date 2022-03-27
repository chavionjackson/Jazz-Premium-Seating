import React, { useState } from "react";
import Image from "next/image";
import carousel from "../Homepage/assets/carousel.jpg";
import lexus from "../Homepage/assets/lexus.jpg";
import wcf from "../Homepage/assets/wcf.jpg";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaInfoCircle,
} from "react-icons/fa";

const randomImgs = [carousel, lexus, wcf];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > randomImgs.length - 1) {
      return 0;
    }
    if (number < 0) {
      return randomImgs.length - 1;
    }
    return number;
  };

  const nextImg = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevImg = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const selectImage = (idx) => {
    setIndex(idx);
  };

  return (
    <div>
      <div className="w-full">
        <Image
          height={900}
          className="w-full h-full carouselImg"
          src={randomImgs[index]}
          alt="carousel"
        />
        <div className="relative flex items-center justify-between pl-8 pr-8 ml-auto mr-auto -top-96">
          <button onClick={() => prevImg(index)}>
            <FaChevronLeft size={60} />
          </button>
          <button onClick={() => nextImg(index)}>
            <FaChevronRight size={60} />
          </button>
        </div>
        <div className="relative flex justify-center w-full pb-24 pl-16 pr-16 -mt-24 -mb-24">
          {randomImgs.map((img, idx) => (
            <FaCircle
              key="image"
              className={
                idx === index
                  ? "text-[#fbed2a] text-base mr-2 ml-2 cursor-pointer"
                  : "text-[#fff] text-base mr-2 ml-2 cursor-pointer"
              }
              icon="circle"
              onClick={() => selectImage(idx)}
            />
          ))}
        </div>
      </div>
      <div className="bg-[#fbed2a] text-base font-bold p-4">
        <div className="flex items-center w-9/12 ml-auto mr-auto">
          <FaInfoCircle size={70}/>
          <p className="p-4">
            Did you know? Whether you’re closing an important business deal or
            celebrating with your employees, renting a suite for a Jazz game is
            perfect for any occasion. Call or text 801.325.2203 to learn more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

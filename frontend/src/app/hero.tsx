import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bottle from "./img/bottle.png";

export default function Hero() {
  return (
    <div className="hero flex ml-[24rem] mt-[20vh]">
      <h2 className="text-[7em] mt-[16rem] -mr-[3rem] font-sans font-extrabold dark:text-white">
        Ghana
      </h2>
      <div className="right flex -ml-[10rem] -mt-3">
        <span className="letter text-[32em] max-w-9 relative x-10 z-10 font-theme font-light mt-[10rem]">
          S
        </span>
        <img
          src={bottle.src}
          alt=""
          className="rounded-3xl w-[24rem] mt-[8rem] bg-inherit opacity-0.5 relative"
        />
        <h2 className="text-[7em] mt-[34rem] -ml-[9rem]  font-sans font-extrabold inherit  dark:text-white">
          olution
        </h2>
      </div>
    </div>
  );
}

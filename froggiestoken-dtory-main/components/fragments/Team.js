/* eslint-disable @next/next/no-img-element */
import TeamGrid from "@/components/TeamGrid";
import { Icon } from "@iconify/react";
import React from "react";

function Team() {
  const scrollOnClick = (id) => {
    const firstSection = document.getElementById(`${id}`);
    firstSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-fit w-full overflow-y-scroll lg:overflow-hidden scrollbar-hide scrollContent lg:flex lg:flex-col lg:justify-center relative pt-20 lg:pt-0 pb-28 lg:pb-0 px-6 lg:px-24">
      <h1 className="text-4xl lg:text-7xl text-white font-extrabold leading-[1.2] lg:leading-[1.2]">
        THE COSMIC CREW
      </h1>
      <p className="hidden lg:block text-primaryGray_100 font-poppins leading-8 text-sm mt-5 lg:w-[800px] w-full">
        Meet the main people behind Froggies working hard everyday to lower
        gravity and increase lift off.
      </p>
      <TeamGrid />
      <div className="hidden lg:flex items-center text-white mt-10">
        <span>Bright Future for $FRGST .</span>
        <div className="w-[100px] h-[1px] bg-white mt-[10px] ml-1"></div>
        <div
          onClick={() => {
            scrollOnClick("3");
          }}
          className="inline-flex items-center relative cursor-pointer ml-4"
        >
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 inset-y-0 h-[250%] w-[150%]">
            <img
              src="/assets/mesh_vector_1.png"
              alt=""
              className="h-full w-full absolute inset-0"
            />
          </div>
          <div className="text-black z-10 flex items-center">
            <span>Dive into the unknown</span>
            <Icon icon="mdi:arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
